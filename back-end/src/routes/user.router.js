const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const router = Router();

router
    .post('/cadastro', UserController.createUser)
    .get('/consulta', UserController.readUser)
    .get('/consultaAll', UserController.readUserAll)
    .patchd('/atualiza', UserController.updateUser)
    .delete('/deleta', UserController.deleteUser)
module.exports = router;