import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Link className="all1">
        <div className="all1-img-container">
          <div className="i">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-eye"></i>
          </div>
          <img src="/imgs/Frame 608(3).png" alt="Quilted Satin Jacket" />
          <button className="add-to-cart">Add To Cart</button>
        </div>
        <p>Quilted Satin Jacket</p>
        <span>$660</span>
      </Link>
    </>
  );
}

export default Products;
