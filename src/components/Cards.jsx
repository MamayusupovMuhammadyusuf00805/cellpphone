import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../services/app";

function Cards({ item }) {
  const navigate = useNavigate();

  
  const handleGoToCard = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    if (item?.id) {
      navigate(`/card/${item.id}`);
    }
  };

  const handleGoToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    navigate("/wishlist");
  };

  return (
    <Link className="flex" to={`/card/${item?.id}`}>
      <div className="flex1">
        <button className="badge">-40%</button>
        <div className="heart">
          <i 
            className="fa-regular fa-heart" 
            onClick={handleGoToWishlist}
            style={{ cursor: "pointer" }}
          ></i>
          <i className="fa-regular fa-eye"></i>
        </div>
      </div>
      
      <img src={`${baseurl}/${item?.pictures?.[0]}`} alt={item?.title} />
      
      <button className="add-to-cart" onClick={handleGoToCard}>
        Add To Cart
      </button>

      <p>{item?.title?.slice(0, 20)}</p>
      <span>$120</span>
      <div className="star">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
    </Link>
  );
}

export default Cards;