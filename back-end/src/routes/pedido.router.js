const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .get('/pedido/:id', PedidoController.readPedido)
    .get('/pedidos', PedidoController.readPedidoAll)
    .patch('/pedido/:id', PedidoController.updatedCarrinho)
    
module.exports = router;

