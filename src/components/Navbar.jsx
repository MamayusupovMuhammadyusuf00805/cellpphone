import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="bar">
        <div className="container top-bar-flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/shop" className="shop-now-btn">
              ShopNow
            </Link>
          </p>
          <select className="lang-select">
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
      <div className="bar1">
        <div className="container main-nav-flex">
          <h1 className="logo">Exclusive</h1>

          <ul className="nav-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
          <div className="nav-right">
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="nav-icons">
              <Link to="/wishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
