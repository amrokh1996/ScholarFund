const contactData = require("../models/about");

const getabout = async (req, res) => {
  try {
    // Retrieve all problems from the database
    const about = await contactData.find();
    res.status(200).json(about);
  } catch (error) {
    console.error("An error occurred while retrieving about", error);
    res.status(500).json({ error: "An error occurred while retrieving about" });
  }
};

module.exports = { getabout };
