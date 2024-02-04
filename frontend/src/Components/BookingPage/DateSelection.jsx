import React, { useState, useEffect } from 'react';
import './DateSelection.css'; 

function DateSelection({ selectedDates, onDateSelection, numRooms, onNumRoomsChange }) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isDateAvailable, setIsDateAvailable] = useState(!selectedDates.checkIn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  useEffect(() => {
    setIsDateAvailable(!selectedDates.checkIn);
  }, [selectedDates,isDrawerOpen]);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSubmit = (e) => {
    // Handle the form submission logic here
    // For example, close the drawer after submission:
    e.preventDefault();
    console.log(":test")
    setIsDrawerOpen(!isDrawerOpen);
  };

  window.addEventListener("resize", handleResize);

  const handleDateChange = (e) => {
    onDateSelection(e.target.value);
  };

  const handleNumRoomsChange = (e) => {
    onNumRoomsChange(e.target.value);
  };

  return (
    <div>
      {isMobileView ? (
        <>
        

      <div className="hotel-page-heading">
        <h1>Top Drawer</h1>
      </div>
     {!isDrawerOpen && <button type="submit" className="btn btn-info" onClick={()=>setIsDrawerOpen(!isDrawerOpen)}>Modify Dates</button>}

        <div className={`drawer ${isDrawerOpen ? 'active' : ''}`}>
          <div className="drawer-content">
            <nav>

              <ul className="nav nav-tabs nav-stacked">
                <form onSubmit={handleSubmit} className='text-center'>
                  <div className="mb-3">
                    <div id="emailHelp" className="form-text">Address: 71/415, in front of DSDA New Building, N2 Sector, New Digha, West Bengal , Digha, West Bengal, India.</div>
                    <label className="form-label">Check In Date</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Room</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-info">Continue</button>
                </form>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hotel-page-footer">
        <p>Copyright © 2023. Zeromiles Hotel Prasant - Family And Pet Friendly, Digha. All Rights Reserved.</p>
      </div>
      

        </>
      ) : (
        <div className="desktop-form">
          <form>
            <label>
              Check-In Date:
              <input type="date" value={selectedDates.checkIn} onChange={handleDateChange} />
            </label>
            <label>
              Number of Rooms:
              <input type="number" value={numRooms} onChange={handleNumRoomsChange} />
            </label>
          </form>
        </div>
      )}
    </div>
  );
}

export default DateSelection;
