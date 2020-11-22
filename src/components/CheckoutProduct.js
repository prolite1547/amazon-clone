import React from "react";
import "./styles/CheckoutProduct.css";
import { useStateValue } from "../config/StateProvider";

function CheckoutProduct({ id, title, price, rating, imgUrl, hiddenBtn }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        src={imgUrl}
        className="checkoutProduct__image"
        alt="product_image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
        {!hiddenBtn && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
