const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type:String,
        required:true
    },
    senha: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },    
    pedido_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pedido",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});


const User = mongoose.model("User", UserSchema);

module.exports = User