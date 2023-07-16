import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Page2() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(file) {
      navigate('/Page3', { state: { file: file } });
    } else {
      // Show error message that a file must be uploaded
    }
  };

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Onboarding - Upload Documents</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload a benefits document, screenshot of benefits page, 401k document, or offer letter</label>
          <input type="file" id="upload" name="upload" onChange={handleFileChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <button type="submit" className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default Page2;
