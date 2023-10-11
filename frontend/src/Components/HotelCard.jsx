import React from "react";

const HotelCard = ({cardData}) => {
    const {img}=cardData

  return (
    <>
      <div className="card" >
       {img && <img src={img} className="card-img-top" alt="..." />}
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
