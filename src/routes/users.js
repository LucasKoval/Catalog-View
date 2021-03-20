//----------* REQUIRE'S *----------//
const express = require('express');
const router = express.Router();


//----------* CONTROLLERS & MIDDLEWARES *----------//
const usersController = require('../controllers/usersController');


//----------* USERS ROUTES *----------//
/* router.get('/registro', guestMW, usersController.registerForm);
router.post('/registro', multer.any(), userValidator.register, usersController.createUser);
router.get('/login', guestMW, usersController.loginForm);                   
router.post('/login', userValidator.login, usersController.processLogin);
router.get('/perfil', authMW, usersController.profile);      
router.get('/logout', authMW, usersController.logout); */


//----------* EXPORTS ROUTER *----------//
module.exports = router;