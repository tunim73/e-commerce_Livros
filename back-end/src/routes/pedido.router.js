const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();
const auth = require  ("../middleware/auth");

router
    .get('/pedido/:id', auth, PedidoController.readPedido)
    .get('/pedidos', auth,  PedidoController.readPedidoAll)
    .patch('/pedido/carrinho/:id', auth,  PedidoController.updatedCarrinho)
    .get('/pedido/carrinho/:id', auth,  PedidoController.readCarrinho)
    
    .get('/pedido/historico/:id', auth, PedidoController.historicoDePedidosDoUsuario)
    .patch('/pedido/historico/:id', auth, PedidoController.addPedidoAoHistorico)

module.exports = router;

