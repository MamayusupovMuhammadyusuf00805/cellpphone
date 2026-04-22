import React from "react";
import { useLocation } from "react-router-dom";


function WishlistPage() {
  const location = useLocation();
  const likedProduct = location.state?.product;

  return (
    <div className="container">
      <h2>Wishlist ({likedProduct ? 1 : 0})</h2>
      
      <div className="wishlist-grid" style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        {likedProduct ? (
          <Cards item={likedProduct} />
        ) : (
          <p>Ваш список желаний пуст</p>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;