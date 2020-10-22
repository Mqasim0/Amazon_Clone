const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HQqD0IoetHlmd9KnAbi17uvtMCIsrdjEvLwzE0yPZfC6sDNZ36ifW26iXsx5tyRh5QODSPS352340roUVvBLOej00bxGdkLu5'
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
