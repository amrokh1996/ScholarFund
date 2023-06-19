// userRoutes.js
const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller');

router.post('/signup', usercontroller.signup);
router.post('/login', usercontroller.login);

router.get("/checkToken", usercontroller.authenticateToken, (req, res) => {
    res.send(req.user);
  } )

router.get('/getdata/:id', usercontroller.getUser);
router.post('/update/:id', usercontroller.updateUser);

module.exports = router;
