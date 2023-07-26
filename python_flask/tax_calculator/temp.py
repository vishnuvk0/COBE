
from datetime import datetime
from federal_tax_brackets_2023 import fed_brackets
from state_tax_brackets_CA_2023 import ca_brackets
import pandas as pd
from workalendar.usa import UnitedStates

def calculate_tax_brackets(income, tax_brackets):
    tax = 0
    for bracket in tax_brackets:
        if income > bracket[1]:
            tax += (bracket[1] - bracket[0] + 1) * bracket[2]
        else:
            tax += (income - bracket[0]) * bracket[2]
            break
    return tax

def calculate_taxes(jobs):
    total_income = 0
    total_deductions = 0
    cal = UnitedStates()
    for job in jobs:
        start_date = datetime.strptime(job['start_date'], '%m/%d/%Y')
        end_date = datetime.strptime(job['end_date'], '%m/%d/%Y')
        days_worked = sum(cal.is_working_day(day) for day in pd.date_range(start_date, end_date))
        pay_periods_worked = days_worked / 14
        prorated_salary = job['salary'] * pay_periods_worked
        total_income += prorated_salary + job['bonus'] + job['pto_payout']
        total_deductions += prorated_salary * job['401k'] / 100 + job['hsa'] + job['other_deductions']

    federal_tax_gai = calculate_tax_brackets(total_income, fed_brackets)
    state_tax_gai = calculate_tax_brackets(total_income, ca_brackets)
    federal_tax_rai = calculate_tax_brackets(total_income - total_deductions, fed_brackets)
    state_tax_rai = calculate_tax_brackets(total_income - total_deductions, ca_brackets)
    tax_savings = federal_tax_gai + state_tax_gai - federal_tax_rai - state_tax_rai
    average_tax_rate = (federal_tax_rai + state_tax_rai) / (total_income - total_deductions)
    return {
        'gross_annual_income': total_income,
        'federal_taxes_gai': federal_tax_gai,
        'state_taxes_gai': state_tax_gai,
        'gross_adjusted_income': total_income - total_deductions,
        'federal_taxes_agi': federal_tax_rai,
        'state_taxes_agi': state_tax_rai,
        'tax_savings': tax_savings,
        'average_tax_rate': average_tax_rate
    }
