import React from 'react';
import { Heart,HeartFill } from 'react-bootstrap-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function Testimonials() {
  const testimonials=[
  {
    "id": 1,
    "testimonialContent": "The devotion to customer service at Chardham Stays is exceptional. From the moment of booking to the end of our stay, every detail was taken care of with utmost care and attention. The serene ambiance added to the spiritual experience of our pilgrimage.",
    "authorName": "Priyanka Mehra",
    "authorTitle": "Pilgrim & Travel Enthusiast",
    "rating": 5,
    "imageUrl": "assets/img/testimonials/testimonials-2.jpg",
    "altText": "Priyanka Mehra"
  },
  {
    "id": 2,
    "testimonialContent": "Chardham Stays provided a perfect base for our spiritual journey. The accommodation was comfortable, and the staff was incredibly hospitable. They truly understand the needs of Chardham pilgrims.",
    "authorName": "Rohan Gupta",
    "authorTitle": "Spiritual Traveller",
    "rating": 4,
    "imageUrl": "assets/img/testimonials/testimonials-1.jpg",
    "altText": "Rohan Gupta"
  },
  {
    "id": 3,
    "testimonialContent": "Our experience with Chardham Stays was nothing short of divine. The hotels were ideally located with beautiful views and the travel arrangements were seamless, making our Chardham Yatra memorable.",
    "authorName": "Amit Singh",
    "authorTitle": "Devotee & Explorer",
    "rating": 5,
    "imageUrl": "assets/img/testimonials/testimonials-4.jpg",
    "altText": "Amit Singh"
  },
  {
    "id": 4,
    "testimonialContent": "I was impressed by the cultural sensitivity and local expertise of Chardham Stays. They made sure our accommodation and food preferences were met with respect to our religious practices during the yatra.",
    "authorName": "Neha Patel",
    "authorTitle": "Cultural Enthusiast",
    "rating": 5,
    "imageUrl": "assets/img/testimonials/testimonials-3.jpg",
    "altText": "Neha Patel"
  }
]
;
  return (

    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Leading Gallopers - Uttarakhand, Haridwar</h2>
          <p>What Are They <span>Saying About Us</span></p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true} modules={[Navigation]}
          pagination={{ clickable: true }}
          className="slides-1 swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
         {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial-item">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-6">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    {testimonial.testimonialContent}
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <h3>{testimonial.authorName}</h3>
                  <h4>{testimonial.authorTitle}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => {
                      return index < testimonial.rating ? (
                        <HeartFill size={20} key={index} />
                      ) : (
                        <Heart size={20} key={index} />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 text-center">
                <img src={testimonial.imageUrl} className="img-fluid testimonial-img" alt={testimonial.altText} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
