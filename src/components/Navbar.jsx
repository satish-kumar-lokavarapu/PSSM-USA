import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles.css";
import "../media-queries.css";

import pssmlogo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/home">HOME</a>
          <a href="/experiance">EXPEREINCES</a>
          <a href="/events">EVENTS</a>
          <a href="/programs">PROGRAMS</a>
          <a href="/history">HISTORY</a>
          <a href="/books">BOOKS</a>
          <a href="/local-masters">LOCAL MASTERS</a>
        </div>

        <a href="#" className="nav-toggle" onClick={handleToggle}>
          <FontAwesomeIcon className="nav-icon" icon={faBars} />
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
