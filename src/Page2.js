import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Page2() {
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location && location.state && location.state.salary) {
      setSalary(location.state.salary);
    }
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(salary && age) {
      navigate('/Page3', { state: { salary: salary, age: age } });
    } else {
      // Show error message that all fields must be filled
    }
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding - Page 2</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload a benefits document, screenshot of benefits page, 401k document, or offer letter</label>
          <input type="file" id="upload" name="upload" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default Page2;