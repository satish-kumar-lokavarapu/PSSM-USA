import React from "react";

import patriji from "../images/patriji.png";
import CircleCard from "./CircleCard";
function AboutPatriji() {
  return (
    <div className="about-patriji">
      <div className="patriji-title">
        <span>About beloved Patriji</span>
      </div>
      <div className="patriji-img">
        <img className="patriji-bg-img" src={patriji} alt="patriji img" />
        <div className="patriji-txt">
          <span>
            A spiritual Scientist who bought new age spiritual revolution with
            simple technique.
          </span>
        </div>
      </div>
      <hr className="hr-about" />
      <div className="circle-btn-container">
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
      </div>
    </div>
  );
}

export default AboutPatriji;
