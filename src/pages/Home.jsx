import React from "react";
import Program from "../components/Program";

import Quote from "../components/Quote";
import Events from "../components/Events";
import Donation from "../components/Donation";
import Volunteer from "../components/Volunteer";
import Footer from "../components/Footer";

import "../styles.css";
import AboutPatriji from "../components/AboutPatriji";
import Meditation from "../components/Meditation";
import Spiritual from "../components/spiritual";
import SocialMedia from "../components/SocialMedia";
import Inperson from "../components/Inperson";
import WhyMeditation from "../components/WhyMeditation";

function Home() {
  return (
    <div>
      {/* <Quote /> */}
      <div className="container">
        <div className="left-container">
          <Program />
          <WhyMeditation />
          {/* <Inperson /> */}
          <Events />
          <Donation />
          <Volunteer />
        </div>
        <div className="right-container">
          <AboutPatriji />
          <Meditation />
          <Spiritual />
          <SocialMedia />
        </div>
      </div>
      <Footer />
      {/* <DonationComponent /> */}
    </div>
  );
}

export default Home;
