import React from "react";
import flyer1 from "../images/flyer1.jpeg";
import "../styles.css";

function ProgramCard(props) {
  return (
    <div className="programcard">
      <div className="programcard-head">
        {/* <div className="circle-img"></div> */}
        <div className="progcard-title">
          <p>{props.title} </p>
          <p>{props.date} </p>
        </div>
      </div>
      <div className="programcard-type">
        <span>Free Program</span>
      </div>
      <div className="programcard-body">
        <div>
          <img className="flyer" src={props.img} alt="flyer-1" />
        </div>
        <div>
          <p>Date & Time:{props.time}</p>
          <p>
            EST_ZOOM Meeting Link:{" "}
            <a href={props.zoom_link}>click to join the zoom</a>
          </p>
          <p>
            Zoom Meeting Id: {props.zoom_meeting_id}
            <br />
            Zoom Passcode: {props.zoom_passcode}
          </p>
          <p>
            Youtube Live link:{" "}
            <a href={props.youtube_link}>{props.youtube_link}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
