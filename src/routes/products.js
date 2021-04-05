//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const productsController = require('../controllers/productsController');


//----------* PRODUCTS ROUTES *----------//
router.get('/', productsController.index);                       // Render the Homepage
router.get('/lowest-cost', productsController.filterLowest);     // Sort products by cost in ascending order
router.get('/highest-cost', productsController.filterHighest);   // Sort products by cost in descending order
router.get('/:id', productsController.redeemProduct);            // Redeem the selected product
/* router.post('/reddem', productsController.redeemProduct); */            
         

//----------* EXPORTS ROUTER *----------//
module.exports = router;