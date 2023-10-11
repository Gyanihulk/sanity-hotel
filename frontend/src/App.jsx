import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';

import StatisticsCounter from './Components/StatisticsCounter';
import Features from './Components/Features';
import { createPost } from './lib/sanity';
const hotels = [
  {
    name: "Hotel Matri Neer",
    location: "Haridwar"
  },
  {
    name: "Hotel Green Leaf",
    location: "Haridwar"
  },
  {
    name: "Hotel Tapovan Vatika",
    location: "Rishikesh"
  },
  {
    name: "Hotel Vimal Ganga",
    location: "Rishikesh"
  },
  {
    name: "Hotel Yellow Leaf",
    location: "Rishikesh"
  },
  {
    name: "Hotel Saku Ganga Palace",
    location: "Rishikesh"
  },
  {
    name: "Hotel Yogasthali",
    location: "Rishikesh"
  },
  {
    name: "Hotel Kumar Residency",
    location: "Barkot"
  },
  {
    name: "Hotel Kumar Hills resort",
    location: "Barkot"
  },
  {
    name: "Hotel Rest And Bite",
    location: "Barkot"
  },
  {
    name: "Hotel Anant Villa",
    location: "Uttarkashi"
  },
  {
    name: "Hotel Devdarshan",
    location: "Uttarkashi"
  },
  {
    name: "Hotel Great Ganga",
    location: "Uttarkashi"
  },
  {
    name: "Hotel Ganga Nivas",
    location: "Gangotri Temple"
  },
  {
    name: "Radhey Radhey Cottages",
    location: "Guptkashi"
  },
  {
    name: "Hotel Sunrise",
    location: "Phata"
  },
  {
    name: "Hotel Your Choice",
    location: "Sirsi"
  },
  {
    name: "Hotel Ekash Vedya",
    location: "Rampur"
  },
  {
    name: "Hotel New Patliputra House",
    location: "Kedarnath Temple"
  },
  {
    name: "Hotel Madan Madhav",
    location: "Pipalkoti"
  },
  {
    name: "Hotel Comfort Inn",
    location: "Pipalkoti"
  },
  {
    name: "Hotel Mount View",
    location: "Joshimath"
  },
  {
    name: "Hotel Badrish",
    location: "Badrinath Temple"
  },
  {
    name: "Hotel Vishnu Sarovar",
    location: "Badrinath Temple"
  },
  {
    name: "Saaru Resorts",
    location: "Badrinath Temple"
  }
];

// Example usage:
console.log(hotels);


function App() {
  hotels.map((hotel=>{
    try{
      const newHotel = {
        _type: 'hotel', // The type you defined in Sanity
        title: hotel.name,
        name: hotel.name,
        city: hotel.location,
        address: '123 Main Street',
        // Add other hotel data fields
      };
    createPost(newHotel).then((res)=>console.log(res))
    }catch(e){
      console.log(e)
    }
  }))
  


  return (
    <>
    <Header/>
     <Gallery/>
     <AboutUs/>
     <StatisticsCounter/>
     <Features/>
    </>
  )
}

export default App
