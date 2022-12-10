const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    carrinho: {
        type: Object
    },
    total: {
        type: Number,
        required: true
    }
});


const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido