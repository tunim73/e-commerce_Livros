const pedidoService = require("../services/pedido.service")

class PedidoController {

    

    static async readPedido(req, res) {
        const { id } = req.params;
        const Pedido = await pedidoService.consultar(id)
        if (!Pedido) {
            return res.status(400).send({ message: "Pedido não encontrado" })
        }
        return res.status(201).json({
            status: true,
            Pedido
        });

    }

    static async readPedidoAll(req, res) {

        try {
            const Pedido = await pedidoService.consultarTudo();

            if (Pedido.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Pedido);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /*
    Ações no carrinho
    Adicionar item - caso o item já exista, aumentar sua quantidade no carrinho
    retirar item - caso tenha mais de um intem, retirar da sua quandtidade no carrinho,
    se chegar a zero retirar elemento do carrinho
    */

    static async updatedCarrinho (req, res) {
        
        
        try {
            
            const {id} = req.params;
            const {livro_id, action} = req.body;

            if (!livro_id || !id )
                return res.status(203).json({ msg: "Chegou nulo ", status: false });

            const livro = { livro_id }

            let updatedItem = await pedidoService.localizaItemCarrinho(id, livro_id);

            if(updatedItem === null)
                updatedItem = await pedidoService.novoItemCarrinho(id, livro);          
            else {
                let newQtd;
                
                if(action === "positivo"){
                    newQtd = (updatedItem.carrinho.itens[0].qtd)+1;
                    updatedItem = await pedidoService.atualizaQuantidadeItemCarrinho(id,livro_id,newQtd);
                }
                else if(action === "negativo"){
                    newQtd = (updatedItem.carrinho.itens[0].qtd)-1;
                    if(newQtd === 0)
                        updatedItem = await pedidoService.removeItemCarrinho(id,livro);
                    else 
                        updatedItem = await pedidoService.atualizaQuantidadeItemCarrinho(id,livro_id,newQtd);
                }

            }

            return res.status(201).json({
                status: true,
                action,
                updatedItem
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    



}











module.exports = PedidoController