const Pedido = require("../models/Pedido");

const criar = (body) => Pedido.create(body)
const deletar = (id) => Pedido.findOneAndDelete({ user_id: id })

const consultarTudo = () => Pedido.find().populate("carrinho.itens.livro_id");
const consultar = (id) => Pedido.findById({ _id: id })


/* No Carrinho */

const localizaItemCarrinho = (pedido_id, livro_id) => Pedido.findOne(
    {
        _id:pedido_id, "carrinho.itens.livro_id": livro_id
    },
    {
        "carrinho.itens.$":1
    }
)
const novoItemCarrinho = (pedido_id,livro) => Pedido.findOneAndUpdate(
        {_id:pedido_id},
        {
            $push: { 
                "carrinho.itens": livro
            }   
        }
)
const atualizaQuantidadeItemCarrinho = (pedido_id,livro_id, newQtd) => Pedido.findOneAndUpdate(

    {_id:pedido_id, "carrinho.itens.livro_id":livro_id},
    {
        $set: { "carrinho.itens.$.qtd":newQtd}
    }

)
const removeItemCarrinho = (pedido_id, livro) => Pedido.findOneAndUpdate(
    {_id:pedido_id,  "carrinho.itens.livro_id":livro.livro_id},
        {
            $pull: { 
                "carrinho.itens":livro
            }   
        }
)








module.exports = {
    criar,
    consultarTudo,
    consultar,
    deletar,
    novoItemCarrinho,
    atualizaQuantidadeItemCarrinho,
    localizaItemCarrinho,
    removeItemCarrinho
}