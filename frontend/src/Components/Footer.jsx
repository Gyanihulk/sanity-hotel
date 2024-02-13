import React, { useContext } from 'react'
import {Instagram,Facebook,Geo,Clock,Telephone} from 'react-bootstrap-icons'
import { HotelContext } from '../context/HotelContext';
import { Link } from 'react-router-dom';
const Footer = () => {
  const {hotels}=useContext(HotelContext);
  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6  footer-info">
          <h3>Chardham Stays</h3>
          <p>
              Book your stay at our luxury hotels in Manali, Jim Corbett, Nainital, Thane, Mussoorie, Haridwar, Rishikesh, and Jaipur and enjoy your grand holiday at Chardham Stay Hotels.
            </p>
            <div className="social-links mt-3">
            <a href="" className="facebook"><Facebook/></a>
            <a href="https://www.instagram.com/chardhamstays/" className="instagram"><Instagram/></a>
            </div>
        </div>
        
        
        <div className="col-lg-3 col-md-6 footer-links">
        <div>
            <h4>Quick Links</h4>
            <p>
              <strong>Home</strong><br/>
              <strong>Blog</strong> <br/>
              <strong>Contact Us</strong> <br/>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links ">
          <div>
            <h4>Our Hotels</h4>
            <p>
            {hotels && hotels.slice(0, 9).map((hotel, index) => (<div key={index}>
                        
              <strong>{hotel.name}</strong> {hotel.city}<br/>
                      </div>))}
                      
            
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links ">
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> +91 999-711-1443<br />
              <strong>Email:</strong> support@chardhamstays.com<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div class="row align-items-start">
    <div class="col">
    Designed by <a href="https://ubiquitous-palmier-e3a771.netlify.app/">Gyanihulk</a><br/>
    
    Powered By <a href="/" >SHREE BALAJI ENTERPRISES</a>
    </div>
    <div class="col">
    <Link to="/terms-and-conditions">Terms and Conditions</Link>
    </div>
    <div class="col">
    <Link to="/refund-policy">Refund Policy</Link>
    </div>
    <div class="col">
    <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
  </div>
    </div>
</footer>

  )
}

export default Footer