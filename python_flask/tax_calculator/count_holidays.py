from workalendar.usa import UnitedStates

def count_federal_holidays(year):
    cal = UnitedStates()
    return cal.holidays(year)

