  const Contact = require("../models/contactus");

  exports.createContact = async (request, response) => {
    try {
      const { name, email, phone, message } = request.body;

      const contact = new Contact({ name, email, phone, message });
      await contact.save();
      response.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
      console.error("An error occurred while creating the contact:", error);
      response
        .status(500)
        .json({
          error: "An error occurred while creating the contact",
          details: error.message,
        });
    }
  };
