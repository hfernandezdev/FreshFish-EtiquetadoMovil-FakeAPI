var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController');

router
    .route('/:id/false/true/true')
    .get(productsController.getProductInfo)

module.exports = router;
