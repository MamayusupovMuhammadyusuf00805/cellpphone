import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const closeMenu = () => setShowUserMenu(false);

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
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign" onClick={closeMenu}>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/card" onClick={closeMenu}>
                Card
              </NavLink>
            </li>
            <li>
              <NavLink to="/log" onClick={closeMenu}>
                Log in
              </NavLink>
            </li>
          </ul>

          <div className="nav-right">
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="nav-icons">
              <NavLink to="/wishlist">
                <i className="fa-regular fa-heart"></i>
              </NavLink>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>

              <div style={{ position: "relative" }}>
                <div
                  className="user-icon-wrapper"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-regular fa-user"></i>
                </div>

                {showUserMenu && (
                  <>
                    <div
                      style={{ position: "fixed", inset: 0, zIndex: 998 }}
                      onClick={closeMenu}
                    />

                    <div className="user-modal" style={{ zIndex: 999 }}>
                      <NavLink to="/user" onClick={closeMenu}>
                        <i className="fa-regular fa-user"></i> Manage My Account
                      </NavLink>
                      <NavLink to="/orders" onClick={closeMenu}>
                        <i className="fa-solid fa-bag-shopping"></i> My Order
                      </NavLink>
                      <NavLink to="/cancel" onClick={closeMenu}>
                        <i className="fa-regular fa-circle-xmark"></i> My
                        Cancellations
                      </NavLink>
                      <NavLink to="/reviews" onClick={closeMenu}>
                        <i className="fa-regular fa-star"></i> My Reviews
                      </NavLink>
                      <NavLink to="/logout" onClick={closeMenu}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                        Logout
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
