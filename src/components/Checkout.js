import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";

import { useStateValue } from "../config/StateProvider";

import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item, i) => (
            <CheckoutProduct
              key={i.toString()}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              imgUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
