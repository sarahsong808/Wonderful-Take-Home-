import React from 'react';
import logo from '../assets/Lexus.png'

const NavigationBar = props => {
return (
    <header className="nav-container">
        <div className="nav-bar">
            <div>
            <img src={logo} alt="lexus logo" height="80"/>
            </div>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
        </div>
        </header>
)
}

export default NavigationBar;