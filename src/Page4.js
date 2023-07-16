import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Page4() {
  const navigate = useNavigate();
  const location = useLocation();
  const { salary, age, retirementAge } = location.state;
  const [oldCompany, setOldCompany] = useState('');
  const [oldSalary, setOldSalary] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the old company and salary for later
    localStorage.setItem('oldCompany', oldCompany);
    localStorage.setItem('oldSalary', oldSalary);
    navigate('/page5', { state: { salary: salary, age: age, retirementAge: retirementAge } });
  };

  const handleCompanyChange = (event) => {
    setOldCompany(event.target.value);
    setShowPopup(true);
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding - Pages 5 & 6</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Page 5: Previous Employment Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="oldCompany" className="block text-sm font-medium text-gray-700">Old Company</label>
          <select id="oldCompany" name="oldCompany" value={oldCompany} onChange={handleCompanyChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a company</option>
            <option value="Visa">Visa</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
            <option value="Leandata">Leandata</option>
            <option value="Meta">Meta</option>
          </select>
          {showPopup && (
            <div className="mt-3">
              <label htmlFor="oldSalary" className="block text-sm font-medium text-gray-700">Old Salary</label>
              <form onSubmit={handlePopupSubmit}>
                <input type="number" id="oldSalary" name="oldSalary" value={oldSalary} onChange={(e) => setOldSalary(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
              </form>
            </div>
          )}
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Page4;
