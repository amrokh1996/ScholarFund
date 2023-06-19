const express = require('express');
const bcrypt = require('bcrypt');
const { jwtGenerator } = require('../utils/jwtGenerator');
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });


// Register route
const signup = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).send('User already exists. Please log in.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwtGenerator(newUser);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Login route
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json('Email or password is incorrect');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json('Email or password is incorrect');
    }

    const token = jwtGenerator(user);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json('User not found');
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
function authenticateToken(req, res, next) {

  const authHeader = req.headers.authorization;
  console.log(authHeader)
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: "Not found" });
  }

  jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid" });
    }

    req.user = decoded;
    next();
  });
}
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json('User not found');
    }

    // Extract updated values from the request body
    const { email, username, firstname, lastname } = req.body;

    // Check if required fields are missing
    if (!email || !username || !firstname || !lastname) {
      return res.status(400).json('Email, username, first name, and last name are required');
    }

    // Update the user object with the new values
    user.email = email;
    user.username = username;
    user.firstname = firstname;
    user.lastname = lastname;

    // Check if files were uploaded
    if (req.files && req.files.length > 0) {
      // Extract image files from the request
      const images = req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
      }));

      // Update the user's images
      user.images = images;
    }

    // Save the updated user to the database
    await user.save();

    res.json({ message: 'User updated successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
module.exports = {
  signup,
  login,
  updateUser,
  getUser,
  authenticateToken,
  
};
