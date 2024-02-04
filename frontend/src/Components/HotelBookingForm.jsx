import React, { useState } from 'react';

function HotelBookingForm() {
  const [selectedHotel, setSelectedHotel] = useState('hotel1');
  const [checkinDate, setCheckinDate] = useState('');
  const [nights, setNights] = useState(1);

  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handleDateChange = (event) => {
    setCheckinDate(event.target.value);
  };

  const handleNightsChange = (event) => {
    setNights(parseInt(event.target.value, 10));
  };

  const handleBooking = () => {
    // Add your booking logic here
    console.log('Selected Hotel:', selectedHotel);
    console.log('Check-In Date:', checkinDate);
    console.log('Number of Nights:', nights);
  };

  return (
<div className="booking-container">
  

  
      
      <div className="booking-form">
        
        <form className="row g-3 align-items-end">
        <div className="col-md-1">
        <h2>BOOK NOW</h2>
        <p>Best Price Guaranteed</p>
      </div>
          <div className="col-md-2 form-field">
            <label htmlFor="hotelSelect" className="form-label">Select Property</label>
            <select
              className="form-control"
              id="hotelSelect"
              value={selectedHotel}
              onChange={handleHotelChange}
            >
                <option value="hotel1">Hotel 1</option>
                <option value="hotel2">Hotel 2</option>
                <option value="hotel3">Hotel 3</option>
            </select>
          </div>
          <div className="col-md-2 form-field">
            <label htmlFor="checkinDate" className="form-label">Check In</label>
            <input
              type="date"
              className="form-control"
              id="checkinDate"
              value={checkinDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-md-2 form-field">
            <label htmlFor="nights" className="form-label">No of Night</label>
            <input
              type="number"
              className="form-control"
              id="nights"
              min="1"
              value={nights}
              onChange={handleNightsChange}
            />
          </div>
          <div className="col-md-1 form-field">
            <button type="button" className="btn btn-primary btn-book" onClick={handleBooking}>
              Book Online
            </button>
          </div>
        </form>
      </div>
  
</div>


  );
}

export default HotelBookingForm;
