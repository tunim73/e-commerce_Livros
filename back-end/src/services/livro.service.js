const Livro = require("../models/Livro");

const criar = (body) => Livro.create(body)
const atualizar = (
    id,
    nome,
    preco,
    descricao,
    autor,
    image
) => Livro.findOneAndUpdate({ _id: id, }, {
    nome,
    preco,
    descricao,
    autor,
    image
})
const consultarTudo = () => Livro.find()
const consultar = (id) => Livro.findById({ _id: id })
const deletar = (id) => Livro.findOneAndDelete({ _id: id })

module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultar,
    deletar,
}