import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

import { useStateValue } from "./config/StateProvider";
import { auth } from "./config/firebase";
import Payment from "./components/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HpkPeFpzyn2DytfZCoELrMSmF2o97eAvKudJ395HLtUZh1bhIAWAMlc2eZbWiAPHUqTCsGPRxiJNld5QxoGOmrH001FIzXuIH"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
