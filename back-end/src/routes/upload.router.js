const { Router } = require('express');
const multer = require('multer');
const router = Router();

const upload = multer({ dest: 'upload' })
router
    .post('/upload', upload.single('file'), (req, res) => {
        console.log('ok')
        res.status(200).json({ msg: "deu certo" })

    })
module.exports = router