const express = require('express');

const  authController = require ('../controllers/auth.controller')

const authRouter = express.Router();

/**
 * @route POST /api/auth/regster 
 * @description Register a new user 
 * @access Public
 */

authRouter.post('/register', authController.registerUserController)


/**
 * @route POST /api/auth/login 
 * @description Login a user with email and password
 * @access Public
 */

authRouter.post('/login',authController.loginUserController)

/**
 * @route Get/api/auth/logout
 * @description clear token from user cookie and add the token in blaklist
 * @access public
 */

authRouter.get('/logout', authController.logoutUserController)

module.exports = authRouter;