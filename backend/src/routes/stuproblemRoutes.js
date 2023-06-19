const express = require('express');
const router = express.Router();
const stuprobelmController = require('../controller/stuprobelmController')

router.post('/addproblem', stuprobelmController.addproblem);
router.get('/getproblem', stuprobelmController.getproblem);
router.get("/getproblemById/:id", stuprobelmController.getproblemById);
router.post("/updateProblem/:id", stuprobelmController.updateProblem);

module.exports = router;
