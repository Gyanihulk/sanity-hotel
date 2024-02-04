import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HotelBookingPage from './Pages/HotelBookingPage';
import { Home } from './Pages/Home';
import { useEffect, useState } from 'react';
import { deleteDuplicateHotels, getHotels, getPosts } from './lib/sanity';




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
    <Home/>
    </>
  )
}

export default App
