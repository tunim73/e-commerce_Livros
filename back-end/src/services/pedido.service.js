const Pedido = require("../models/Pedido");

const criar = (body) => Pedido.create(body)
const atualizar = (
    id,
    nome,
    total
) => Pedido.findOneAndUpdate({ _id: id, }, {
    nome,
    total
})
const consultarTudo = () => Pedido.find()
const consultar = (id) => Pedido.findById({ _id: id })
const deletar = (id) => Pedido.findOneAndDelete({ _id: id })

module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultar,
    deletar,
}