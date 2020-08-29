import React from 'react';
import logo from '../assets/Lexus.png';
import User from './User';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <header className="nav-container">
      <div className="nav-bar">
        <div>
          <img src={logo} alt="lexus logo" height="80" />
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div>
          <User />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
