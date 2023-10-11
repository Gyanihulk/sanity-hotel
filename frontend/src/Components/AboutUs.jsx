import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";

const setting1 = {
  width: "660px",
  height: ["250px"],
  layout: [1], // Update the layout to match the description
  photos: [
    {
      source: import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-1.jpg"
    }
  ],
  showNumOfRemainingPhotos: true
};
const setting2 = {
  width: "330px",
  height: ["250px"],
  layout: [1], // Update the layout to match the description
  photos: [
    
    {
      source:
      import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-2.jpeg"
    },
    
  ],
  showNumOfRemainingPhotos: true
};
const setting3 = {
  width: "330px",
  height: ["125px","125px"],
  layout: [2,2], // Update the layout to match the description
  photos: [
    {
      source:
      import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-3.jpg"
    },
    {
      source:
      import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-4.jpg"    },
    {
      source:
      import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-5.jpg"    },
    {
      source:
      import.meta.env.VITE_PUBLIC_URL +"/assets/img/about/about-6.jpg"    },
   
  ],
  showNumOfRemainingPhotos: true
};

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div
            className="col-lg-5 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="content ps-0 ps-lg-5">
              <h1>About Us</h1>
              <p>
                ChardhamStay Hotels is a renowned name in the hotel industry,
                offering laudable services and opulent accommodation to guests.
                Chardhamstay Hotels managed by Chardhamstay HOTELS (I) PVT. LTD
                has eight properties in Manali, Jim Corbett , Nanital, Thane,
                Mussoorie, Haridwar, Rishikesh, and Jaipur. It is the
                quintessential hotel for the ones who are searching for a
                budget-friendly hotel that incorporates well-appointed rooms,
                appetizing gourmet experiences, elaborate event spaces,
                advantageous offers, intriguing services and amenities. Book
                your stay at our luxury hotels in Manali, Jim Corbett , Nanital,
                Thane, Mussoorie, Haridwar, Rishikesh, and Jaipur and enjoy your
                grand holiday at Chardhamstay Hotels.
              </p>
            </div>
          </div>
          <div
            className="col-lg-7 position-relative "
            data-aos="fade-up"
            data-aos-delay="150"
          >
<div className="row about-collage">
<><ReactPhotoCollage {...setting1} />
    <ReactPhotoCollage {...setting2} />
    <ReactPhotoCollage {...setting3} /></>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
