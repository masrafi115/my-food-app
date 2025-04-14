// FoodCatalog.js
import React from 'react';

// New components
import CustomerStatistics from './CustomerStatistics';
import CompanyVision from './CompanyVision';
import CompanyAddress from './CompanyAddress';
import CompanyDetails from './CompanyDetails';

const FoodCatalog = () => {
  const foodItems = [
    { id: 1, name: 'Pizza', price: 12.99, image: 'https://media.istockphoto.com/id/1413684626/photo/classic-pepperoni-pizza-with-cut-slices-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=YYrLl6_MKT_FHSwk31Wwsxz4xafWCspAUcLJDjz_mu8=' },
    { id: 2, name: 'Sushi', price: 9.99, image: 'https://media.istockphoto.com/id/1136546066/photo/pieces-of-delicious-japanese-sushi-frozen-in-the-air.jpg?s=1024x1024&w=is&k=20&c=7zyf0iuRj-uFuyMvXx3XBIwzf8mKO-JkLp-aN4BTd5c=' },
    { id: 3, name: 'Tacos', price: 10.99, image: 'https://media.istockphoto.com/id/459396345/photo/taco.jpg?s=1024x1024&w=is&k=20&c=ptqvfVJDsrNXzPUSUMVgbAkqIXotUf3a8lFAHBt9ZSE=' },
    // Add more food items here...
  ];

  return (
    <div className="food-catalog-grid grid gap-4">

      {foodItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg p-4 border-2 border-yellow-500 hover:shadow-xl transition duration-200 ease-in-out"
        >
          <img
            src={item.image}
            alt={item.name}
            className="rounded-t-lg w-full h-56 object-cover"
          />
          <h2 className="font-bold text-2xl text-gray-800">{item.name}</h2>
          <p className="text-gray-600 text-sm">{`Its ${item.name}`}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCatalog;