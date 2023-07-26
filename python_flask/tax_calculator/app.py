from collections import OrderedDict
import json
from flask import Flask, request, jsonify
from tax_calculator import calculate_taxes

app = Flask(__name__)

@app.route('/calculate_tax', methods=['POST'])
def calculate_tax():
    jobs = request.json
    results = calculate_taxes(jobs)

    results['gross_annual_income'] = round(results['gross_annual_income'], 2)
    results['federal_taxes_gai'] = round(results['federal_taxes_gai'], 2)
    results['state_taxes_gai'] = round(results['state_taxes_gai'], 2)
    results['gross_adjusted_income'] = round(results['gross_adjusted_income'], 2)
    results['federal_taxes_agi'] = round(results['federal_taxes_agi'], 2)
    results['state_taxes_agi'] = round(results['state_taxes_agi'], 2)
    results['tax_savings'] = round(results['tax_savings'], 2)
    results['average_tax_rate'] = round(results['average_tax_rate'], 4)  # Round to 4 decimal places

        # Define the order of keys as per your desired output
    key_order = [
        'gross_annual_income',
        'federal_taxes_gai',
        'state_taxes_gai',
        'gross_adjusted_income',
        'federal_taxes_agi',
        'state_taxes_agi',
        'tax_savings',
        'average_tax_rate',
    ]

    ordered_results = {key: results[key] for key in key_order}

    # Use OrderedDict to maintain the order of keys
    return json.dumps(ordered_results, indent=2)

if __name__ == '__main__':
    app.run(port=5001, debug=True)