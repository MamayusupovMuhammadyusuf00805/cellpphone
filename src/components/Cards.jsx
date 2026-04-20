import React from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../services/app";

function Cards({item}) {
  return (
    <>
      <Link className="flex">
        <div className="flex1">
          <button>-40%</button>

        </div>
        <img src={`${baseurl}/${item?.pictures[0]}`} alt={item?.title} />
        <button className="add-to-cart">Add To Cart</button>

        <p>{item?.title.slice(0,20)}</p>
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
