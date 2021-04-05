//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const usersController = require('../controllers/usersController');


//----------* USERS ROUTES *----------//
router.get('/profile', usersController.profile);              // Render the profile view        
router.post('/points/1000', usersController.addPoints1000);   // Add 1000 points to your profile
router.post('/points/5000', usersController.addPoints5000);   // Add 5000 points to your profile
router.post('/points/7500', usersController.addPoints7500);   // Add 7500 points to your profile


//----------* EXPORTS ROUTER *----------//
module.exports = router;