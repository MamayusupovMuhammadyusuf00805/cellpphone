import React, { useEffect, useState, useContext } from "react";
import "./Card.css";
import { useParams } from "react-router-dom";
import { Datacontext } from "../../App";

function Card() {
  const { id } = useParams();
  const { onepro } = useContext(Datacontext);

  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    onepro(id)
      .then((res) => {
        const product = Array.isArray(res) ? res[0] : res;

        if (!product) {
          setData(null);
          return;
        }

        setData(product);

        const firstImage =
          product?.image ||
          product?.pictures?.[0] ||
          product?.category?.image ||
          "";

        setMainImg(getImage(firstImage));
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [id]);

  const getImage = (img) => {
    if (!img) return "https://via.placeholder.com/400";

    if (typeof img === "object") {
      img = img.image || img.url || "";
    }

    if (!img) return "https://via.placeholder.com/400";
    if (typeof img === "string" && img.startsWith("http")) {
      return img;
    }

    return `https://ecommercev01.pythonanywhere.com${img}`;
  };

  if (loading) {
    return <div style={{ padding: 100, textAlign: "center" }}>Загрузка...</div>;
  }

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Товар не найден</h2>;
  }

  const images =
    data.pictures && data.pictures.length > 0
      ? data.pictures
      : data.image
        ? [data.image]
        : [];

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="cardpage">
      <div className="container">
        <div className="product-card-flex">
          <div className="gallery-side">
            <div className="thumbs">
              {images.map((pic, i) => (
                <img
                  key={i}
                  src={getImage(pic)}
                  alt="thumb"
                  onClick={() => setMainImg(getImage(pic))}
                  className={mainImg === getImage(pic) ? "active" : ""}
                />
              ))}
            </div>

            <div className="main-img-holder">
              <img src={mainImg} alt={data.title} />
            </div>
          </div>
          <div className="info-side">
            <h2>{data.title}</h2>

            <div className="rating">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i> (150 Reviews)
            </div>

            <h3 className="price">${data.price}</h3>

            <p>{data.description}</p>
            <div className="quantity">
              <button onClick={decrease}>-</button>

              <input type="text" value={quantity} readOnly />

              <button onClick={increase}>+</button>
            </div>

            <div className="actions">
              <button className="buy">Buy Now</button>
              <button className="wishlist">♡</button>
            </div>

            <div className="delivery">
              <img src="public/imgs/icon-delivery(1).png" alt="" />
              <img src="public/imgs/Icon-return(1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
