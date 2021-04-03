//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const productsController = require('../controllers/productsController');


//----------* PRODUCTS ROUTES *----------//
router.get('/', productsController.index);      
router.get('/:id', productsController.redeemProduct);
/* router.post('/reddem', productsController.redeemProduct); */            
         

//----------* EXPORTS ROUTER *----------//
module.exports = router;