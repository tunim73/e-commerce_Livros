const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .post('/pedido', PedidoController.createPedido)
    .get('/pedido/:id', PedidoController.readPedido)
    .get('/pedidos', PedidoController.readPedidoAll)
    .patch('/pedido/:id', PedidoController.updatePedido)
    .delete('/pedido/:id', PedidoController.deletePedido)
module.exports = router;