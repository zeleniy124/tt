import React from 'react';
import './Header.css'; // Create a CSS file for custom styles if needed.

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title"> PumpTok</h1>
      <h2 className="header-title"> Tiktok for pump.fun degens
      </h2>
      <nav className="header-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );    
};

export default Header;
