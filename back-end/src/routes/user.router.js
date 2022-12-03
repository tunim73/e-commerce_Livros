const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const router = Router();

router
    .post('/cadastro', UserController.createUser)
    .get('/consulta', UserController.readUser)
    .get('/consultaAll', UserController.readUserAll)
    .patchd('/:id', UserController.updateUser)
    .delete('/:id', UserController.deleteUser)
module.exports = router;