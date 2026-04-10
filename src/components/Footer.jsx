import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="footer-input-wrapper">
            <input type="email" placeholder="Enter your email" />
            <button className="send-btn">
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,  <br /> DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footer-col">
          <h3>Account</h3>
          <ul>
            <li><Link to="/profile">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Download App</h3>
          <p className="app-promo">Save $3 with App New User Only</p>
          <div className="download-wrapper">
            <div className="qr-code">
              <img src="/images/qr-code.png" alt="QR Code" />
            </div>
            <div className="app-buttons">
              <img src="/images/google-play.png" alt="Google Play" />
              <img src="/images/app-store.png" alt="App Store" />
            </div>
          </div>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;