const { Router } = require('express');
const AutorController = require('../controllers/Autor.controller');
const router = Router();
const upload = require('../middleware/upload')

router
    .post('/autor', upload.single('image'), AutorController.createAutor)
    .get('/autor/:id', AutorController.readAutor)
    .get('/autores', AutorController.readAutorAll)
    .patch('/autor/:id', upload.single('image'), AutorController.updateAutor)
    .delete('/autor/:id', AutorController.deleteAutor)
module.exports = router;