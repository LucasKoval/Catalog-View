//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const productsController = require('../controllers/productsController');


//----------* PRODUCTS ROUTES *----------//
router.get('/', productsController.list);                                                                                                                                         
router.get('/:id', productsController.detail);                                             


//----------* EXPORTS ROUTER *----------//
module.exports = router;