import React from "react";
import "./../layout/Header.css";
import logo from './logo.png';

const Header = (props) => {
  return (
    <header>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Satisfy&display=swap');
      </style>
      <div className="holder">
        <div className="logo">
        <img src={logo} alt="logo" width='90px' height='90px'/>
        </div>
        <h1>Sinergia Cosmética</h1>
        <h3>INSPIRED BY NATURE</h3>
      </div>
      
    </header>
  );
};

export default Header;
