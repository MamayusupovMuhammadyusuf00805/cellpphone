import React from "react";
import { useParams } from "react-router-dom";

function Card({ products }) {
  // Получаем id из URL
  const { id } = useParams();

  // Ищем конкретный продукт в массиве
  // Используем String(), чтобы сравнение работало, даже если id — строка, а в базе — число
  const product = products.find((item) => String(item.id) === String(id));

  // Если данных еще нет (идет загрузка) или товар не найден
  if (!product) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Товар загружается или не найден...</h2>
      </div>
    );
  }

  return (
    <div className="product-card-detail" style={{ padding: "20px" }}>
      <h1>{product.title || product.name}</h1>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ maxWidth: "300px" }} 
      />
      <p>{product.description}</p>
      <p><strong>Цена: {product.price} USD</strong></p>
    </div>
  );
}

// ВОТ ЭТА СТРОЧКА ИСПРАВЛЯЕТ ВАШУ ОШИБКУ:
export default Card;