const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    biografia: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});


const Autor = mongoose.model("Autor", AutorSchema);

module.exports = Autor