import React from "react";
import { Slide } from "react-awesome-reveal";

const GalleryCard = ({data}) => {
  return (
    <div className="heroSwiper">
      <Slide direction="left" className="heading">{data?.middle}
        </Slide>
        <Slide direction="down" className="top-text">{data?.top}</Slide>
      <img
        src={data?.img}
        className="img-fluid"
        alt=""
      />
      <Slide direction="up" className="bottom-text"><button type="button" className="btn btn-outline-light btn-lg">Explore</button></Slide>
    </div>
  );
};

export default GalleryCard;
