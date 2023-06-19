const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MONGO_URL, connectionParams } = require("./src/config/config");
const contactRoutes = require('./src/routes/contactRoutes');
const stuproblemRoutes = require('./src/routes/stuproblemRoutes');
const payment = require("./src/routes/paymentInfo");
const about = require("./src/routes/aboutusRoutes");



const app = express();
const Data = require('./src/models/data'); // Import the Data model


const userRoutes = require('./src/routes/userRoutes')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URL, connectionParams)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// ! POST payment info ~~~ Mais
app.post('/api/data', (req, res) => {
  const { cardNumber, nameOnCard, securityCode, expirationDate, amountOfDonation,  user_id } = req.body;

  // Create a new instance of the Data model with the submitted data
  const newData = new Data({ cardNumber, nameOnCard, securityCode, expirationDate, amountOfDonation, user_id });

  // Save the new data to the database
  newData.save()
    .then(() => res.status(201).json({ message: 'Payment data saved successfully' }))
    .catch((error) => res.status(500).json({ error: 'An error occurred while saving the payment data' }));
});

// Router setup

// mufed
app.use('/contacts', contactRoutes);

//mahmoud
app.use('/prob', stuproblemRoutes);


app.listen(3100, () => {
  console.log("Server running on port 3100");
});

 // Router
 app.use('/contacts', contactRoutes);
 app.use('/prob' , stuproblemRoutes);
 app.use('/user' , userRoutes);
  app.use("/payment", payment);
  app.use("/", about);

