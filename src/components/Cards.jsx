import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <Link className="flex">
        <div className="flex1">
          <button>-40%</button>

        </div>
        <img src="public/imgs/Frame 611.png" alt="" />
        <button className="add-to-cart">Add To Cart</button>

        <p>HAVIT HV-G92 Gamepad</p>
        <span>$120</span>
        <div className="star">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </Link>
    </>
  );
}

export default Cards;
