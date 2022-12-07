const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    carrinho: {
        type: Object,
        required: true
    },
    Total: {
        type: String,
        required: true,

    }
});


const Pedido = mongoose.model("Pedido", LivroSchema);

module.exports = Pedido