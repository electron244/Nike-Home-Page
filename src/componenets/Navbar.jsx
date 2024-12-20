import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div >
          <Link to='/'><img src="../public/brand_logo.png" className="logo" alt="" /></Link>
          
        </div>

        <div className="menu">
            <Link to='menu'>MENU</Link>
            <Link to='location'>LOCATION</Link>
            <Link to='about'>ABOUT</Link>
            <Link to='contact'>CONTACT</Link>
        </div>
        <div className="login">
            <button className="btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
