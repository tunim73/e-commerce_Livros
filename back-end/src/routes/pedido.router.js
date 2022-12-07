const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .post('/pedido', PedidoController.createLivro)
    .get('/pedido/:id', PedidoController.readLivro)
    .get('/pedidos', PedidoController.readLivroAll)
    .patch('/pedido/:id', PedidoController.updateLivro)
    .delete('/pedido/:id', PedidoController.deleteLivro)
module.exports = router;