const { Router } = require('express');
const LivroController = require('../controllers/Livro.controller');
const router = Router();
const upload = require('../middleware/upload')
router
    .post('/livro', upload.single('image'), LivroController.createLivro)
    .get('/livro/:id', LivroController.readLivro)
    .get('/livros', LivroController.readLivroAll)
    .patch('/livro/:id', LivroController.updateLivro)
    .delete('/livro/:id', LivroController.deleteLivro)
module.exports = router;