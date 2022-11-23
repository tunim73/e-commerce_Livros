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
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User