import React from "react";
import "./styles/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__header">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY h:mm a")}</p>
        <p className="order__id">{order.id}</p>
      </div>
      <div className="order__details">
        {order.data.basket?.map((item, i) => (
          <CheckoutProduct
            key={i.toString()}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            imgUrl={item.imageUrl}
            hiddenBtn={true}
          />
        ))}
      </div>
      <div className="order__paymentDetails">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>Order Total : {value}</h3>
            </>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
