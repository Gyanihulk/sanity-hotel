import React from 'react';
import { Heart, Star, Check, ChevronRight } from 'react-bootstrap-icons';

function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>Why Choose Leading Gallopers?</h3>
              <p>
                At Leading Gallopers, we stand out for our commitment to excellence, years of experience, and a track record of success. Our dedication to teaching the art of horse riding sets us apart.
              </p>
              <div className="text-center">
                <a href="#contact" className="more-btn">
                  Learn More <ChevronRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <Check size={48} />
                  <h4>Passionate Coaching</h4>
                  <p>Our experienced coach's passion for horse riding drives our top-notch training programs.</p>
                </div>
              </div>
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <Star size={48} />
                  <h4>National-Level Success</h4>
                  <p>Many of our students have achieved national-level medals under expert guidance.</p>
                </div>
              </div>
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <Heart size={48} />
                  <h4>Welcoming Community</h4>
                  <p>Join a supportive community of horse enthusiasts, from beginners to seasoned riders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
