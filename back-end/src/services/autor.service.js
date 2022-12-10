const Autor = require("../models/Autor");

const criar = (body) => Autor.create(body)
const atualizar = (
    id,
    nome,
    genero,
    biografia,
    anoDeNascimento,

) => Autor.findOneAndUpdate({ _id: id, }, {
    nome,
    genero,
    biografia,
    anoDeNascimento,

})
const consultarTudo = () => Autor.find()
const consultar = (id) => Autor.findById({ _id: id })
const deletar = (id) => Autor.findOneAndDelete({ _id: id })

module.exports = {
    criar,
    atualizar,
    consultarTudo,
    consultar,
    deletar,
}