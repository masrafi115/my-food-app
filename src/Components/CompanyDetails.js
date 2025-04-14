// CompanyDetails.js
import React from 'react';

const CompanyDetails = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-yellow-500 hover:shadow-xl transition duration-200 ease-in-out">
      <h2 className="font-bold text-2xl text-gray-800">Company Details</h2>
      <p className="text-gray-600 text-sm">Founded in 2010</p>
      <p className="text-gray-600 text-sm">CEO: John Doe</p>
      <p className="text-gray-600 text-sm">Employees: 50+</p>
      <p className="text-gray-600 text-sm">Awards: 10+</p>
    </div>
  );
};

export default CompanyDetails;