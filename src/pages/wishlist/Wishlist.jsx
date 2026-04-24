import React, { useState, useEffect } from "react";
import { wishlist } from "../../services/app";
import Cards from "../../components/Cards";

function WishlistPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wishlist()
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Wishlist error:", err);
        setItems([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Wishlist ({items.length})</h2>

      <div
        className="wishlist-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {items.length > 0 ? (
          items.map((product) => (
            <Cards key={product.id} item={product} />
          ))
        ) : (
          <p>Ваш список желаний пуст</p>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;