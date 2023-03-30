import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Feature = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="facilitymain" id="facility">
      <h1>Facilities at Clarks Resort Nepal</h1>
      <Carousel responsive={responsive}>
        <div className="featurecard">
          <img src="\reception.jpg"></img>
          <div>
            <p>Main reception</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\swim.jpg"></img>
          <div>
            <p>Swimming</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\gym.jpeg"></img>
          <div>
            <p>Gym</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\walk.jpg"></img>
          <div>
            <p>jungle walk</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\casino.jpg"></img>
          <div>
            <p>casino</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\cloths.jpg"></img>
          <div>
            <p>lundry</p>
          </div>
        </div>
        <div className="featurecard">
          <img src="\med.jpg"></img>
          <div>
            <p>Meditation</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Feature;
