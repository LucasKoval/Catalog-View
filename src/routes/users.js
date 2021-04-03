//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const usersController = require('../controllers/usersController');


//----------* USERS ROUTES *----------//
router.get('/profile', usersController.profile);
router.post('/points/1000', usersController.addPoints1000);
router.post('/points/5000', usersController.addPoints5000);
router.post('/points/7500', usersController.addPoints7500);


//----------* EXPORTS ROUTER *----------//
module.exports = router;