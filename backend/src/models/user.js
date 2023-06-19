const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1- Create a new schema 
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    images: {
        type: [Buffer],
       
      },
    role: {
        type: String,
        required: true
    }
}, { timestamps: true });

// 2- Export the model with the schema
const User = mongoose.model('User', userSchema);
module.exports = User;