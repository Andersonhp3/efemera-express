let express = require('express');
let router = express.Router();
let HomeController = require("../Controllers/HomeController");



/* GET home page. */
router.get('/', HomeController.index);

module.exports = router;
