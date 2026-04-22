import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router-dom";
import { onepro, baseurl } from "../../services/app";

function Card() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      onepro(id).then((res) => {
        console.log("Данные из API:", res); 
        setData(res);
      });
    }
  }, [id]);

  if (!data) return <div className="loading">Загрузка данных...</div>;
  const mainImage = data.category?.image ? `${baseurl}${data.category.image}` : "";

  return (
    <div className="cardpage">
      <div className="container">
        <div className="product-card-flex">

          <div className="gallery-side">
             <div className="thumbs">
                <img src={mainImage} alt="thumb" />
                <img src={mainImage} alt="thumb" />
             </div>
             <div className="main-img-holder">
                <img src={mainImage} alt={data.title} />
             </div>
          </div>

          <div className="info-side">
            <h1>{data.title || "Без названия"}</h1>
            <div className="price-tag">${data.price}</div>
            <p className="description-text">{data.description}</p>
            
            <div className="actions">
               <button className="buy-btn">Buy Now</button>
            </div>

            <div className="delivery">
               <p>🚚 Free Delivery</p>
               <p>🔄 Return Delivery</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;