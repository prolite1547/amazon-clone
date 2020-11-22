const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HpkPeFpzyn2Dytfa3m1XPw5ctWkOpBpvjm4AKA4ls7oJ1HLc9vAORYpAKBKfVxXTjcMEEbzNIloAZOgnj62rm5X007LgyvdUl"
);

//  API

//  API CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ENDPOINTS / ROUTES
app.get("/", (request, response) => response.status(200).send("HELLO API"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Received with an amount of : ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  LISTENERS
exports.api = functions.https.onRequest(app);
