import React from "react";

function HowToMeditate() {
  return (
    <div className="">
      <div className="video-title">
        <span>How To Do Meditation</span>
      </div>
      <div>
        <iframe
          className="video-responsive"
          src="https://www.youtube.com/embed/ex2LQ6H-kVA"
          allowFullScreen
          allow=""
        ></iframe>
      </div>
    </div>
  );
}

export default HowToMeditate;
