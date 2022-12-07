const { Router } = require('express');
const PedidoController = require('../controllers/Pedido.controller');
const router = Router();

router
    .post('/livro', PedidoController.createLivro)
    .get('/livro/:id', PedidoController.readLivro)
    .get('/livros', PedidoController.readLivroAll)
    .patch('/livro/:id', PedidoController.updateLivro)
    .delete('/livro/:id', PedidoController.deleteLivro)
module.exports = router;