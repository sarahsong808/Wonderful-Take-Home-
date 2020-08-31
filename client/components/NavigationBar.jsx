import React from 'react';
import logo from '../assets/Lexus.png';
import User from './User';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
//i'd use router but i'm setting up navigation bar with a tags for this case
const NavigationBar = props => {
  return (
    <header className="nav-container">
      <ul className="nav-bar">
        <li className="nav-item">
          <img
            src={logo}
            alt="lexus logo"
            height="75vh"
            className="lexus-logo"
          />
        </li>
        <li className="nav-item">
          <a href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a href="/about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>

      <User />
    </header>
  );
};

export default NavigationBar;
