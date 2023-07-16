import React from 'react';

function Page5() {
  const salary = localStorage.getItem('salary');
  const biweeklySalary = salary / 26;
  const contribution = biweeklySalary * 0.10;

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Good Morning, here's an overview of your benefits:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Last Paycheck</h2>
          <p>Last paycheck: ${biweeklySalary.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-2">Latest 401(k) Contribution</h2>
          <p>${contribution.toFixed(2)}: last 401(k) contribution</p>
          <p>Savings of ${contribution.toFixed(2)} found on taxes if you...<a href="#" className="text-blue-500">See more</a></p>
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

export default Page5;
