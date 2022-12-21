const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    nome: {
        type: String,
        unique:true,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    genero: {
        type: String,
        required: false
    },
    autor: {
        type: String,
        required: false
    },
    image: {
        type: String
    }

});


const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro