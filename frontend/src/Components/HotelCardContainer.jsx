import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HotelCard from "./HotelCard";

const data = [
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
  {
    name: "name",
    img: "https://i0.wp.com/staygohotels.com/wp-content/uploads/2023/01/h-4.jpg",
  },
];
export const HotelCardContainer = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    // Function to update the windowSize state when the window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener to the window
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); //
  return (
    <>
      <Swiper
      slidesPerView={windowSize.width<450?1:4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
           <HotelCard cardData={card}/>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
