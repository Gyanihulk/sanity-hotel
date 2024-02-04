import React from 'react';
import { HotelCardContainer } from './HotelCardContainer';


function Gallery1() {
  return (
    <section id="stats-counter" className="stats-counter">
      
      <div className="content ps-0 ps-lg-5 text-center our-hotel">
              <h1 className='text-white'>Our Gallery</h1>
              <p className='text-white'>
              It is the quintessential hotel for the ones who are searching for a budget-friendly hotel that incorporates well-appointed rooms, appetizing gourmet experiences, elaborate event spaces, advantageous offers, intriguing services and amenities.
                
              </p>
            </div>
    <HotelCardContainer/>
    </section>
   
  );
}

export default Gallery1;
