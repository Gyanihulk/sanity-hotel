import React from 'react';
import { HotelCardContainer } from './HotelCardContainer';


function StatisticsCounter() {
  return (
    <section id="stats-counter" className="stats-counter">
      
      <div className="content ps-0 ps-lg-5 text-center">
              <h1 className='text-white'>About Us</h1>
              <p className='text-white'>
                ChardhamStay Hotels is a renowned name in the hotel industry,
                offering laudable services and opulent accommodation to guests.
                
              </p>
            </div>
    <HotelCardContainer/>
    </section>
   
  );
}

export default StatisticsCounter;
