import React from "react";
import {
  Map,
  Envelope,
  Geo,
  Clock,
  Telephone,
  Share,
} from "react-bootstrap-icons";
const hotelInfo = [
  {
    name: "chardhamstays",
    title: "THE BASIC REQUIREMENT OF GUESTS DURING A STAY",
    info: "Staygo Hotels is the ultimate place for both business and leisure travelers who look forward to finding the perfect place to relish an ideal stay. We know how to deliver a memorable hotel experience by making everyone smile.",
  },
  {
    name: "chardhamstays",
    title: "ENJOY MORE AND CAPTURE UNFORGETTABLE MOMENTS",
    info: "Staygo Hotels impresses its guests by equipping comfortable beds and alluring interiors at a pocket-friendly rate. We make sure that people make complete use of unlimited comfort that is kept in store for them.",
  },
  {
    name: "chardhamstays",
    title: "ROOMY EVENT SPACES ARE BOUND TO GIVE THRIVING OUTCOMES",
    info: "One-of-a-kind event venues at Staygo Hotels are renowned for providing beneficial consequences to the guests and offer awe-inspiring services and facilities that undeniably result in the success of any event.",
  },
  {
    name: "chardhamstays",
    title:
      "IS UNLIMITED FOOD THE ONLY CRITERIA REQUIRED WHEN IT COMES TO SAVORING DIVERSE DISHES?",
    info: "Mouth-watering food is what visitors expect from a distinguished hotel which subsumes restaurants that serve an assortment of dishes. The delicacies should be available in the proper quantity and price.",
  },
  {
    name: "chardhamstays",
    title: "WHAT ARE THE BASIC AMENITIES REQUIRED DURING THE STAY?",
    info: "People who book accommodation in various hotels are not used to using unrequested amenities. They make complete use of the basic comforts like free wifi that help them work and relax peacefully.",
  },
  {
    name: "chardhamstays",
    title: "DO FANCY-LOOKING INTERIORS DELIVER THEIR PROMISE?",
    info: "Staygo Hotels is the perfect blend of value, decor, and accessibility. Its interiors and decorations are distinguished for being classy and more productive.",
  },
];

// Example usage:
console.log(hotelInfo);

const Features = () => {
  return (
    <>
      <div className="feature">
        <div className="row">
          {hotelInfo.map((info) => (
            <>
              <div className="col-md-6">
                <div className="info-item align-items-center">
                  <i className="icon ">
                    <Map />
                  </i>
                  <div>
                    <h3>{info.title}</h3>
                    <p>
                     { info.info}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
