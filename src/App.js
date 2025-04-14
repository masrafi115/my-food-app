import logo from './logo.svg';
import './App.css';
import React from 'react';
import FoodCatalog  from './Components/FoodCatalog';


// New components
import CustomerStatistics from './Components/CustomerStatistics';
import CompanyVision from './Components/CompanyVision';
import CompanyAddress from './Components/CompanyAddress';
import CompanyDetails from './Components/CompanyDetails';
import HeaderDesign from './Components/HeaderDesign';


function App() {
  return (
    <div className="App">
      <HeaderDesign />
    <div>
    <FoodCatalog />
    <CustomerStatistics />
      <CompanyVision />
      <CompanyAddress />
      <CompanyDetails />

    </div>


    </div>
    

  );
}

export default App;
