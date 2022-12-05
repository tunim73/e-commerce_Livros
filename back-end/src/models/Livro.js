const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    edicao: {
        type: String,
        required: true,
        unique: true
    }
});


const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro