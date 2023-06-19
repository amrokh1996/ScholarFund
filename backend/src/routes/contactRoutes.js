const express = require('express');

const contactController = require('../controller/contactController')

const router = express.Router();

router.post('/', contactController.createContact);


module.exports = router;
