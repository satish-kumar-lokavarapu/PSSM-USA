import React from "react";

import "../styles.css";
import pssmlogo from "../images/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img
            src={pssmlogo}
            alt="pssm-logo"
            width="150rem"
            height="130rem"
          ></img>
        </div>

        <div className="nav-items">
          <a href="/home">HOME</a>
          <a href="/experiance">EXPEREINCES</a>
          <a href="/events">EVENTS</a>
          <a href="/programs">PROGRAMS</a>
          <a href="/history">HISTORY</a>
          <a href="/books">BOOKS</a>
          <a href="/local-masters">LOCAL MASTERS</a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
