import { useState } from 'react';
import './App.css';
import { AllCountries, CountryInfo,  } from './components';


function App() {


  return (
    <>
      <div className="header">
        <div className='container'>
          <h5 className='intro__text'>
            Where in the World
          </h5>
          
        </div>
      </div>
      <div className="container">
        <div>
          <AllCountries />
          <CountryInfo />
          
        </div>
      </div>
    </>
  );
}

export default App;
