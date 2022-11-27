const User = require("../models/User");

const criar = (body) => User.create(body)
const atualizar = () => User.update()
const consultarTudo = () => User.find()
const consultar = (id) => User.findById(id)
const deletar = () => User.delete()





module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultar,
    deletar,
}