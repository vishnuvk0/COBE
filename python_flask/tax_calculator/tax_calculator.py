from datetime import datetime
from federal_tax_brackets_2023 import fed_brackets
from state_tax_brackets_CA_2023 import ca_brackets
import pandas as pd
from workalendar.usa import UnitedStates
from count_holidays import count_federal_holidays
from calc_fica import calculate_fica


def calculate_taxes(jobs):
    total_income = 0
    total_deductions = 0
    
    for job in jobs:
        start_date = datetime.strptime(job['start_date'], '%m/%d/%Y')
        end_date = datetime.strptime(job['end_date'], '%m/%d/%Y')
        cal = UnitedStates()

        # Fetch all federal holidays in the year of the job
        holidays = [date[0] for date in cal.holidays() if start_date.year <= date[0].year <= end_date.year]

        # Include federal holidays falling on weekdays
        holiday_days = sum(day.date() in holidays for day in pd.date_range(start_date, end_date) if day.weekday() < 5)

        # calculate the total number of working days in the year, including weekdays and holidays that fall on weekdays
        total_work_days_year = sum(day.weekday() < 5 for day in pd.date_range(datetime(start_date.year, 1, 1), datetime(start_date.year, 12, 31))) + sum(day.date() in holidays for day in pd.date_range(datetime(start_date.year, 1, 1), datetime(start_date.year, 12, 31)) if day.weekday() < 5)

        # calculate the days worked
        days_worked = sum(day.weekday() < 5 for day in pd.date_range(start_date, end_date)) + holiday_days

        # prorate the salary based on the days worked
        prorated_salary = job['salary'] * (days_worked / total_work_days_year)

        total_income += prorated_salary + job['bonus'] + job['pto_payout']
        total_deductions += prorated_salary * job['401k'] / 100 + job['hsa'] + job['other_deductions']

    #gross annual
    fica_tax_gai = calculate_fica(total_income)
    federal_tax_gai = calculate_tax_brackets(total_income, fed_brackets)
    state_tax_gai = calculate_tax_brackets(total_income, ca_brackets)
    
    #adjusted income
    fica_tax_rai = calculate_fica(total_income - total_deductions)
    federal_tax_rai = calculate_tax_brackets(total_income - total_deductions, fed_brackets)
    state_tax_rai = calculate_tax_brackets(total_income - total_deductions, ca_brackets)
    
    #tax savings
    tax_savings = federal_tax_gai + state_tax_gai + fica_tax_gai - federal_tax_rai - state_tax_rai - fica_tax_rai

    #average tax rate
    average_tax_rate = (federal_tax_rai + state_tax_rai + fica_tax_rai) / (total_income - total_deductions)
    
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

def calculate_tax_brackets(income, tax_brackets):
    tax = 0
    for bracket in tax_brackets:
        if income > bracket[1]:
            tax += (bracket[1] - bracket[0] + 1) * bracket[2]
        else:
            tax += (income - bracket[0]) * bracket[2]
            break
    return tax