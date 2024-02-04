// HotelBookingPage.js
import React, { useState } from 'react';
import DateSelection from '../Components/BookingPage/DateSelection';



function HotelBookingPage() {
  // Define states for the page
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [guestDetails, setGuestDetails] = useState({ name: '', mobile: '', message: '' });

  // Function to update the selected dates
  const handleDateSelection = (checkIn, checkOut) => {
    setSelectedDates({ checkIn, checkOut });
  };

  // Function to update the selected rooms
  const handleRoomSelection = (room) => {
    setSelectedRooms([...selectedRooms, room]);
  };

  // Function to update guest details
  const handleGuestDetailsChange = (field, value) => {
    setGuestDetails({ ...guestDetails, [field]: value });
  };

  // Function to handle the booking submission
  const handleBookingSubmit = () => {
    // Implement your booking logic here
    // You can use the selectedDates, selectedRooms, and guestDetails states
  };

  return (
<>
      <DateSelection selectedDates={selectedDates} onDateSelection={handleDateSelection} />
      {/* <RoomList selectedRooms={selectedRooms} onRoomSelection={handleRoomSelection} />
      <Billing selectedRooms={selectedRooms} />
      <GuestDetails guestDetails={guestDetails} onGuestDetailsChange={handleGuestDetailsChange} />
    <BookingButton onSubmit={handleBookingSubmit} /> */}
    </>

  );
}

export default HotelBookingPage;
