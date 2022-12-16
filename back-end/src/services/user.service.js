const User = require("../models/User");

const criar = (body) => User.create(body);
const atualizar = (id,body) => User.findOneAndUpdate({ _id: id, }, body);


const consultarTudo = () => User.find();
const consultarPorId = (id) => User.findById({ _id: id }).populate("pedido_id");

const consultarPorEmail = (email) => User.findOne({email:email});

const deletar = (id) => User.findOneAndDelete({ _id: id });








module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultarPorId,
    consultarPorEmail,
    deletar,
}