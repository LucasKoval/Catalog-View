//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const usersController = require('../controllers/usersController');


//----------* USERS ROUTES *----------//
router.get('/', usersController.userInfo);
router.post('/points', usersController.addPoints);
router.get('/history', usersController.userHistory);


//----------* EXPORTS ROUTER *----------//
module.exports = router;