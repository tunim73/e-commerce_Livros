const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .post('/pedido', PedidoController.createPedido)
    .get('/pedido/:id', PedidoController.readPedido)
    .get('/pedidos', PedidoController.readPedidoAll)
    .patch('/pedido/:id', PedidoController.updatePedido)
    .delete('/pedido/:id', PedidoController.deletePedido)

    .post('/testePedido', PedidoController.testePedido)
    .put('/carrinho/:id', PedidoController.atualizarItemCarrinho)

module.exports = router;