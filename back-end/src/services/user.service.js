const User = require("../models/User");

const criar = (body) => User.create(body)
const atualizar = (
    id,
    nome,
    senha,
    email
) => User.findOneAndUpdate({ _id: id, }, {
    nome,
    senha,
    email,
})
const consultarTudo = () => User.find()
const consultar = (id) => User.findById({ _id: id })
const deletar = (id) => User.findOneAndDelete({ _id: id })





module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultar,
    deletar,
}