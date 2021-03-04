const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send(`Payments API`));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('PAYMENT REQUEST RECIEVED >>>>>>>>>>>>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
