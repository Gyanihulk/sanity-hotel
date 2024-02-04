import React from 'react';
import {Map,Envelope,Clock,Telephone} from 'react-bootstrap-icons'
const Contact = () => {
    
   function Submit() {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      process.env.REACT_APP_DATA_SHEET,
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <p>Have Questions? <span>Contact Leading Gallopers</span></p>
        </div>

        <div className="mb-3">
          <iframe title="Map" style={{ border: 0, width: '100%', height: '350px' }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=leadinggallopers&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon "><Map/></i>
              <div>
                <h3>Our Location</h3>
                <p>Gurukul Kangri Vishwavidyalaya, Jagjeetpur, Haridwar, Uttarakhand 249404</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon flex-shrink-0"><Envelope/></i>
              <div>
                <h3>Email Us</h3>
                <p>saurabh.y.bhatia@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon  flex-shrink-0"><Telephone/></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 967-599-9979</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon  flex-shrink-0"><Clock/></i>
              <div>
                <h3>Business Hours</h3>
                <div><strong>Mon-Sat:</strong> 7AM - 9AM ,4PM - 6 PM ;<br /><strong>Sun:</strong> 7AM - 9AM</div>
              </div>
            </div>
          </div>
        </div>

        <form className="php-email-form p-3 p-md-4" onSubmit={(e) => Submit(e)}>
          <div className="row">
            <div className="col-xl-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-xl-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
