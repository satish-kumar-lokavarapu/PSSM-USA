import React from "react";
import ProgramCard from "./ProgramCard";
import BooksClubCard from "./BooksClubCard";

import "../styles.css";

function Program() {
  return (
    <div className="outer-box">
      <div className="prog-top">
        <div className="prog-title">
          <h4>PROGRAMS</h4>
          {/* <button className="prog-btn">On Going</button>
          <button className="prog-btn">Up Comming</button> */}
        </div>
        {/* <div className="prog-date">
          <select className="calender">
            <option value="November">November</option>
            <option value="December">December</option>
            <option value="January">January</option>
          </select>
          <select className="year">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div> */}
      </div>
      <div className="prog-head">
        <ProgramCard />
        <ProgramCard />
      </div>
      <div className="bookclub">
        <BooksClubCard />
      </div>
    </div>
  );
}
export default Program;
