import React from "react";
import ProgramCard from "./ProgramCard";
import BooksClubCard from "./BooksClubCard";
import programDetails from "../ProgramDetails";

import "../styles.css";

function createProgram(program) {
  return (
    <ProgramCard
      title={program.title}
      date={program.date}
      time={program.time}
      img={program.img}
      zoom_link={program.zoom_link}
      zoom_meeting_id={program.zoom_meeting_id}
      zoom_passcode={program.zoom_passcode}
      youtube_link={program.youtube_link}
    />
  );
}

function Program() {
  return (
    <div className="outer-box">
      <div className="prog-top">
        <div className="prog-title">
          <h4>PROGRAMS</h4>
        </div>
      </div>
      <div className="prog-head">{programDetails.map(createProgram)}</div>
      <div className="bookclub">{/* <BooksClubCard /> */}</div>
    </div>
  );
}
export default Program;
