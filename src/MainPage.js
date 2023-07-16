import React, { useState, useEffect } from 'react';

function MainPage() {
  const [oldSalary, setOldSalary] = useState(0);
  const [newSalary, setNewSalary] = useState(0);

  useEffect(() => {
    const oldSalaryFromStorage = localStorage.getItem('oldSalary');
    const newSalaryFromStorage = localStorage.getItem('newSalary');
    if (oldSalaryFromStorage) setOldSalary(parseFloat(oldSalaryFromStorage));
    if (newSalaryFromStorage) setNewSalary(parseFloat(newSalaryFromStorage));
  }, []);

  const salaryIncrease = newSalary - oldSalary;
  const additionalSavings = salaryIncrease * 0.10;

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Good Morning, here's an overview of your benefits:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Salary Increase</h2>
          <p>Salary increase: ${salaryIncrease.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Additional Savings</h2>
          <p>Additional savings: ${additionalSavings.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Health Insurance Information</h2>
          <p>Cigna PPO HDHI</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Taxes</h2>
          <p>Learn more about your taxes, with AI.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;


// const salary = localStorage.getItem('salary');
// const biweeklySalary = salary / 26;
// const contribution = biweeklySalary * 0.10;