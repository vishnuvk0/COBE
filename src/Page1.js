import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username && password && company) {
      navigate('/Page2', { state: { company: company } });
    } else {
      // Show error message that all fields must be filled
    }
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding - Page 1</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-3">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mt-3">Company</label>
          <select id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a company</option>
            <option value="Amazon">Amazon</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Visa">Visa</option>
          </select>
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Page1;
