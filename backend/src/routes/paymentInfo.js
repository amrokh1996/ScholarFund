const express = require("express");
const router = express.Router();
const setpaymentController = require("../controller/paymentController");

router.post("/api/data", setpaymentController.getproblem);
router.get("/getpayment", setpaymentController.getpayment);
module.exports = router;
