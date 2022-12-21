const { Router } = require('express');
const LoginController = require('../controllers/Login.conrtroller');
const UserController = require('../controllers/User.controller');
const auth = require  ("../middleware/auth");


const router = Router();

router
    .post('/user', UserController.createUser)
    .get('/user/:id', UserController.readUser)
    .get('/users', auth, UserController.readUserAll)
    .delete('/user/:id', UserController.deleteUser)
    .post('/login', LoginController.login)

    .post('/validateToken', LoginController.validateToken)
    
module.exports = router;