def calculate_fica(gross_income):
    social_security_rate = 0.062
    medicare_rate = 0.0145
    additional_medicare_rate = 0.009
    additional_medicare_threshold = 200000

    social_security_tax = gross_income * social_security_rate
    medicare_tax = gross_income * medicare_rate

    if gross_income > additional_medicare_threshold:
        additional_medicare_tax = (gross_income - additional_medicare_threshold) * additional_medicare_rate
    else:
        additional_medicare_tax = 0

    total_fica_tax = social_security_tax + medicare_tax + additional_medicare_tax
    
    return total_fica_tax
