const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .get('/pedido/:id', PedidoController.readPedido)
    .get('/pedidos', PedidoController.readPedidoAll)
    .patch('/pedido/carrinho/:id', PedidoController.updatedCarrinho)
    .get('/pedido/carrinho/:id', PedidoController.readCarrinho)
    
    .get('/pedido/historico/:id', PedidoController.historicoDePedidosDoUsuario)
    .patch('/pedido/historico/:id', PedidoController.addPedidoAoHistorico)

module.exports = router;

