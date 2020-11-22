import React, { useState, useEffect } from "react";
import "./styles/Orders.css";
import { useStateValue } from "../config//StateProvider";
import { db } from "../config/firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log("YOUR ORDERS >>>>>> ", orders);
  return (
    <div className="orders">
      <h1>Order History</h1>
      {orders?.map((order, i) => (
        <Order order={order}></Order>
      ))}
    </div>
  );
}

export default Orders;
