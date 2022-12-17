//const { Router } = require('express');
const multer = require('multer');
const path = require('path')
    // const router = Router();

let storage = multer.diskStorage({
    destination: function dest(req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function rename(req, file, callback) {
        let ext = path.extname(file.originalname)
        callback(null, Date.now() + ext)
    }

})

let upload = multer({
        storage: storage,
        fileFilter: function filter(req, file, cb) {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {

                cb(null, true)

            } else {

                cb(null, false)
            }
        },
        limit: { fileSize: 1024 * 1024 * 2 }
    })
    /*router
        .post('/upload', upload.single('file'), (req, res) => {
            console.log('ok')
            res.status(200).json({ msg: "deu certo" })

        })*/
module.exports = upload //router