import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HotelBookingPage from './Pages/HotelBookingPage';
import { Home } from './Pages/Home';
import { useEffect, useState } from 'react';
import { deleteDuplicateHotels, getHotels, getPosts } from './lib/sanity';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TermsAndConditions from './Pages/TermsCondition';
import RefundPolicy from './Pages/Refund';
import PrivacyPolicy from './Pages/Privacy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  // hotels.map((hotel=>{
  //   try{
  //     const newHotel = {
  //       _type: 'hotel', // The type you defined in Sanity
  //       title: hotel.name,
  //       name: hotel.name,
  //       city: hotel.location,
  //       address: '123 Main Street',
  //       // Add other hotel data fields
  //     };
  //   createPost(newHotel).then((res)=>console.log(res))
  //   }catch(e){
  //     console.log(e)
  //   }
  // }))


  return (
    <>
    <BrowserRouter>
    <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
