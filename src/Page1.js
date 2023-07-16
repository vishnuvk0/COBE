import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Page2', { state: { salary: salary } });
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Step 1: Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" name="username" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-3">Password</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="font-bold mb-2">Step 2: What company do you work for?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input type="text" id="company" name="company" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Page1;
