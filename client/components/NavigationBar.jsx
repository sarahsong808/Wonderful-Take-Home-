import React, {useState} from 'react';
import logo from '../assets/Lexus.png';
import User from './User';
// import Menu from './Menu';

// import { BrowserRouter as Router, Link } from 'react-router-dom';
//i'd use router but i'm setting up navigation bar with a tags for this case
const NavigationBar = () => {
    const [toggleOpen, setToggleOpen] = useState(false);

    const menuIconDisplay = toggleOpen ? (
    <div><li className="nav-item">
          <a href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a href="/about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="/contact">CONTACT</a>
          </li>
          <li className="nav-item-account">
            <a href="#">MY ACCOUNT</a>
          </li></div>
    ) : (
      null
    );
  
//hide the navbar and call the above menu-items
  return (
    <header className="nav-container">
        <a href="#" className="toggle-button" onClick={()=> setToggleOpen(!toggleOpen)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        </a>
        {menuIconDisplay}
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
