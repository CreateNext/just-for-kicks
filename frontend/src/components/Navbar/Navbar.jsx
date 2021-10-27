import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">KickStart</div>

      <ul className="navbar__list">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Featured</li>
        <li className="navbar__item">Store</li>
      </ul>

      <a href="https://lekan.vercel.app" className="navbar__button">
        Buy Site
      </a>
    </div>
  );
};

export default Navbar;
