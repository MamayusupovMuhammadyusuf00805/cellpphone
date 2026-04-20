import React from "react";
import "./Card.css";
import Cards from "../../components/Cards";
import Products from "../../components/Products";

function Card() {
  return (
    <div className="cardpage">
      <div className="container">
       
        <div className="product-card">
          <div className="path">
            Account / Gaming / <span className="path-active">Havic HV G-92 Gamepad</span>
          </div>

          <div className="product-content">
            <div className="product-gallery">
              <div className="thumb-list">
                <div className="thumb-card"> <img src="/imgs/image 57.png" alt="thumb" /> </div>
                <div className="thumb-card"> <img src="/imgs/image 57.png" alt="thumb" /> </div>
                <div className="thumb-card"> <img src="/imgs/image 57.png" alt="thumb" /> </div>
                <div className="thumb-card"> <img src="/imgs/image 57.png" alt="thumb" /> </div>
              </div>
              <div className="main-img-box">
                <img src="/imgs/Frame 894.png" alt="main" />
              </div>
            </div>

            <div className="product-info">
              <h1 className="title">Havic HV G-92 Gamepad</h1>
              
              <div className="stats">
                <span className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </span>
                <span className="reviews">(150 Reviews) | </span>
                <span className="stock">In Stock</span>
              </div>

              <div className="price">$192.00</div>

              <p className="desc">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive 
                for easy bubble free install & mess free removal.
              </p>

              <div className="row">
                <span className="label">Colours:</span>
                <div className="color-dot color-blue"></div>
                <div className="color-dot color-red"></div>
              </div>

              <div className="row">
                <span className="label">Size:</span>
                <button className="size-btn">XS</button>
                <button className="size-btn">S</button>
                <button className="size-btn size-btn-active">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>

              <div className="buy-row">
                <div className="counter">
                  <button className="btn-control"><i className="fa-solid fa-minus"></i></button>
                  <div className="count-val">2</div>
                  <button className="btn-control btn-plus"><i className="fa-solid fa-plus"></i></button>
                </div>
                <button className="buy-now">Buy Now</button>
                <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
              </div>

              <div className="delivery-box">
                <div className="delivery-item line">
                  <i className="fa-solid fa-truck-fast delivery-icon"></i>
                  <div className="delivery-text">
                    <div className="delivery-title">Free Delivery</div>
                    <div className="delivery-subtitle">Enter your postal code</div>
                  </div>
                </div>
                <div className="delivery-item">
                  <i className="fa-solid fa-arrows-rotate delivery-icon"></i>
                  <div className="delivery-text">
                    <div className="delivery-title">Return Delivery</div>
                    <div className="delivery-subtitle">Free 30 Days Delivery Returns.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="related-section">
           <Cards />
           <Cards />
           <Cards />
           <Cards />
        </div>

      </div> 
    </div>
  );
}

export default Card;