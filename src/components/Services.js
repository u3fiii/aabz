import React, { useState, useEffect } from 'react';

import PelakLottie from '../components/PelakLottie';
import AzadrahiLottie from '../components/AzadrahiLottie';
import SalianehLottie from '../components/SalianehLottie';
import BimehLottie from '../components/BimeLottie';
import GovahinamehLottie from '../components/GonahinamehLottie';

function Services() {


  return (
    <div className="services">
      
      <div className='services-wrapper'>

      <div className='service plate'>
          <BimehLottie />
          <p className='service-text'>بیمه شخص ثالث</p>
      </div>

      <div className='service plate'>
          <AzadrahiLottie />
          <p className='service-text'>عوارض آزادراهی</p>
      </div>

      <div className='service plate'>
          <SalianehLottie />
          <p className='service-text'>عوارض سالیانه </p>
      </div>

      <div className='service plate'>
          <GovahinamehLottie />
          <p className='service-text'>استعلام گواهینامه</p>
      </div>

     

      <div className='service plate'>
          <PelakLottie />
          <p className='service-text'>استعلام پلاک</p>
      </div>
      <div className='service plate'>
          <GovahinamehLottie />
          <p className='service-text'>استعلام گواهینامه</p>
      </div>
      <div className='service plate'>
          <BimehLottie />
          <p className='service-text'>بیمه شخص ثالث</p>
      </div>

      <div className='service plate'>
          <PelakLottie />
          <p className='service-text'>استعلام پلاک</p>
      </div>

      <div className='service plate'>
          <SalianehLottie />
          <p className='service-text'>عوارض سالیانه و </p>
      </div>

      <div className='service plate'>
          <AzadrahiLottie />
          <p className='service-text'>عوارض آزادراهی</p>
      </div>

      </div>
       

    </div>
  );
}

export default Services;