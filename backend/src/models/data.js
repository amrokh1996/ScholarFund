const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  cardNumber: String,
  nameOnCard: String,
  securityCode: String,
  expirationDate: String,
  amountOfDonation: String,
  user_id:String,
});

const Data = mongoose.model('Data', dataSchema); // Create the Data model

module.exports = Data; // Export the Data model
