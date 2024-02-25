import React, { useContext, useState } from 'react';
import { HotelContext } from '../context/HotelContext';
import { useNavigate } from 'react-router-dom';
function HotelBookingForm() {
  const [selectedHotel, setSelectedHotel] = useState('hotel1');
  const [checkinDate, setCheckinDate] = useState('');
  const [nights, setNights] = useState(1);

  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
    console.log(event)
  };

  const handleDateChange = (event) => {
    setCheckinDate(event.target.value);
  };

  const handleNightsChange = (event) => {
    setNights(parseInt(event.target.value, 10));
  };
const navigate=useNavigate();
  const handleBooking = () => {
    // Add your booking logic here
    console.log('Selected Hotel:', selectedHotel);
    console.log('Check-In Date:', checkinDate);
    console.log('Number of Nights:', nights);
  
    navigate(`/hotel/${selectedHotel}/checkout/?date=${checkinDate}&nights=${nights}`);
  };
  const {hotels}=useContext(HotelContext);
  
  const handleFocus = (event) => {
    if (event.target.type === 'date' && 'showPicker' in event.target) {
      event.target.showPicker();
    }
  };
  console.log(hotels)
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
              className="form-select"
              id="hotelSelect"
              value={selectedHotel}
              onChange={handleHotelChange}
            >
              {hotels && hotels.slice(0, 7).map((hotel, index)=>(<option className="form-control" key={index} value={hotel.name}>{hotel.name}</option>))}
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
              onFocus={handleFocus}
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
