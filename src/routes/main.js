//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const mainController = require('../controllers/mainController');


//----------* MAIN ROUTES *----------//
router.get('/', mainController.index);                  
router.get('/search', mainController.search);          


//----------* EXPORTS ROUTER *----------//
module.exports = router;
