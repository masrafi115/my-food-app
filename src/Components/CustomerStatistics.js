// CustomerStatistics.js
import React from 'react';

const CustomerStatistics = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-yellow-500 hover:shadow-xl transition duration-200 ease-in-out">
      <h2 className="font-bold text-2xl text-gray-800">Customer Statistics</h2>
      <p className="text-gray-600 text-sm">1000+ happy customers</p>
      <p className="text-gray-600 text-sm">500+ orders per week</p>
    </div>
  );
};

export default CustomerStatistics;