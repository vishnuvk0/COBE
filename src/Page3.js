import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Page3() {
  const [salary, setSalary] = useState('');
  const [dob, setDob] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [taxFilingStatus, setTaxFilingStatus] = useState('');
  const [dependents, setDependents] = useState('');
  const [spouseBenefits, setSpouseBenefits] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [insuranceCard, setInsuranceCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFileChange = (event) => {
    setInsuranceCard(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(salary && dob && state && city && retirementAge && taxFilingStatus && dependents && spouseBenefits) {
      navigate('/Page4', { state: { salary: salary, dob: dob, state: state, city: city, retirementAge: retirementAge, taxFilingStatus: taxFilingStatus, dependents: dependents, spouseBenefits: spouseBenefits, insuranceCompany: insuranceCompany, insuranceCard: insuranceCard } });
    } else {
      // Show error message that all fields must be filled
    }
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Page 3: Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
          <input type="number" id="salary" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mt-3">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {dob && new Date().getFullYear() - new Date(dob).getFullYear() < 26 && (
            <>
              <label htmlFor="insuranceCompany" className="block text-sm font-medium text-gray-700 mt-3">Insurance Company</label>
              <input type="text" id="insuranceCompany" name="insuranceCompany" value={insuranceCompany} onChange={(e) => setInsuranceCompany(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <label htmlFor="insuranceCard" className="block text-sm font-medium text-gray-700 mt-3">Insurance Card</label>
              <input type="file" id="insuranceCard" name="insuranceCard" onChange={handleFileChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </>
          )}
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mt-3">State</label>
          <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a state</option>
            <option value="California">California</option>
          </select>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-3">City</label>
          <select id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a city</option>
            <option value="SF">SF</option>
          </select>
          <label htmlFor="retirementAge" className="block text-sm font-medium text-gray-700 mt-3">Retirement Age</label>
          <input type="number" id="retirementAge" name="retirementAge" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="taxFilingStatus" className="block text-sm font-medium text-gray-700 mt-3">Tax Filing Status</label>
          <input type="text" id="taxFilingStatus" name="taxFilingStatus" value={taxFilingStatus} onChange={(e) => setTaxFilingStatus(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mt-3">Dependents</label>
          <input type="text" id="dependents" name="dependents" value={dependents} onChange={(e) => setDependents(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="spouseBenefits" className="block text-sm font-medium text-gray-700 mt-3">Spouse Benefits</label>
          <input type="text" id="spouseBenefits" name="spouseBenefits" value={spouseBenefits} onChange={(e) => setSpouseBenefits(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Page3;
