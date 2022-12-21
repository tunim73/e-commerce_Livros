const { Router } = require('express');
const AutorController = require('../controllers/Autor.controller');
const router = Router();
const upload = require('../middleware/upload')
const auth = require  ("../middleware/auth");


router
    .post('/autor', auth, upload.single('image'), AutorController.createAutor)
    .get('/autor/:id', AutorController.readAutor)
    .get('/autores', AutorController.readAutorAll)
    .patch('/autor/:id', auth, upload.single('image'), AutorController.updateAutor)
    .delete('/autor/:id', auth, AutorController.deleteAutor)
module.exports = router;