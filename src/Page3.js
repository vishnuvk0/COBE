import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Page3() {
  const [retirementAge, setRetirementAge] = useState('');
  const [salary, setSalary] = useState(''); // Add this line
  const navigate = useNavigate();
  const location = useLocation();
  const { age } = location.state; // Remove salary from here

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Page4', { state: { salary: salary, age: age, retirementAge: retirementAge } });
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding - Pages 3 & 4</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Page 3: Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
          <input type="number" id="salary" name="salary" value={salary} onChange={handleSalaryChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mt-3">Date of Birth</label>
          <input type="date" id="dob" name="dob" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-3">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Page3;
