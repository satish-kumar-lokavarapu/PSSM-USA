import React from "react";
import flyer1 from "../images/flyer1.jpeg";
import "../styles.css";

function ProgramCard() {
  return (
    <div className="programcard">
      <div className="programcard-head">
        {/* <div className="circle-img"></div> */}
        <div className="progcard-title">
          <p>CHANGE YOUR MIND and CHANGE YOUR LIFE </p>
          <p>Dates: Dec 12th to Jan 12th </p>
        </div>
      </div>
      <div className="programcard-type">
        <span>Free Program</span>
      </div>
      <div className="programcard-body">
        <div>
          <img className="flyer" src={flyer1} alt="flyer-1" />
        </div>
        <div>
          <p>Date & Time: 5.30 am EST</p>
          <p>
            EST_ZOOM Meeting Link:{" "}
            <a href="https://us02web.zoom.us/j/83299568390?pwd=SUJOZWsyUGE3ei9naEUvMTJUdHEwdz09">
              https://us02web.zoom.us/j/83299568390?pwd=SUJOZWsyUGE3ei9naEUvMTJUdHEwdz09
            </a>
          </p>
          <p>
            Zoom Meeting Id: 832 9956 8390
            <br />
            Zoom Passcode: 801942
          </p>
          <p>
            Youtube Live link:{" "}
            <a href="https://youtube.com/live/f1P5AepH3no?feature=share">
              https://youtube.com/live/f1P5AepH3no?feature=share
            </a>
          </p>
        </div>
      </div>
      {/* <hr className="hl" />
      <div className="progarm-schedule">
        <div className="program-date">
          <span>Nov 14th to 25th</span>
        </div>
        <div className="program-time">
          <span>8:00 - 9:00 PM EST</span>
        </div>
      </div>
      <div className="program-register">
        <button className="register">REGISTER</button>
      </div> */}
    </div>
  );
}

export default ProgramCard;
