import React, {useState} from 'react';

import './App.css';

import Header from './components/Header';
import Services from './components/Services';

import './styles/app.scss';

// import CarSpline from './components/CarSpline';
function App() {
  return (
    <div className="App">
      <Header />
      <Services />
     <div className='hero-wrapper'> 
          {/* <CarSpline /> */}
     </div>
          
  
    </div>
  );
}

export default App;
