const { Router } = require('express');
const LivroController = require('../controllers/Livro.controller');
const router = Router();
const upload = require('../middleware/upload')
const auth = require  ("../middleware/auth");

router
    .post('/livro', auth, upload.single('image'), LivroController.createLivro)
    .get('/livro/:id', LivroController.readLivro)
    .get('/livros', LivroController.readLivroAll)
    .patch('/livro/:id', auth, upload.single('image'), LivroController.updateLivro)
    .delete('/livro/:id', auth, LivroController.deleteLivro)
    
module.exports = router;