const User = require("../models/User");

const criar = (body) => User.create(body)
const atualizar = (body) => User.update(body)
const consultar = (body) => User.find(body)
const deletar = (body) => User.delete(body)





module.exports = {
    criar,
    atualizar,
    consultar,
    deletar,
}