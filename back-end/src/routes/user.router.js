const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const router = Router();

router
    .post('/user', UserController.createUser)
    .get('/user/:id', UserController.readUser)
    .get('/users', UserController.readUserAll)
    .patch('/user/:id', UserController.updateUser)
    .delete('/user/:id', UserController.deleteUser)
module.exports = router;