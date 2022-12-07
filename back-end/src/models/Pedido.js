const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    total: {
        type: String,
        required: true,
    }
});


const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido