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

    static async readCarrinho (req, res){
        try {
            const {id} = req.params;
            
            if (!id)
                return res.status(203).json({ msg: "Os Campos chegaram Nulo, verifique e tente novamente", status: false });

            let pedidos = await pedidoService.consultaCarrinho(id);
            
            const total = await PedidoController.calculoTotal(pedidos);
            

            
            res.status(200).json({ 
                status: true, 
                itens: pedidos.carrinho.itens,
                total
            });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async updatedCarrinho (req, res) {
        
        try {
            
            const {id} = req.params;
            const {livro_id, action} = req.body;

            if (!livro_id || !id )
                return res.status(203).json({ msg: "Os Campos chegaram Nulo, verifique e tente novamente", status: false });

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

            let pedidos = await pedidoService.consultaCarrinho(id);
            const total = await PedidoController.calculoTotal(pedidos);


            return res.status(201).json({
                status: true,
                action,
                itens: pedidos.carrinho.itens,
                total
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async addPedidoAoHistorico(req, res){

        try {
            const {id} = req.params;
            const {itens, total} = req.body;

            if (!id || !itens || !total)
            return res.status(203).json({ msg: "Os Campos chegaram Nulo, verifique e tente novamente", status: false });

            const newHistorico = await pedidoService.adicionaAoHistorico(id, itens, total);

            res.status(201).json({msg:"historico atualizado", status: true, newHistorico});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async historicoDePedidosDoUsuario (req, res){
        try {
            const {id} = req.params;
            
            if (!id )
                return res.status(203).json({ msg: "Os Campos chegaram Nulo, verifique e tente novamente", status: false });

            const historico = await pedidoService.historicoDoUsuario(id);


            if (historico.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json({status: true, historico});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }



    static async calculoTotal (pedidos) {
        let total = 0;
        pedidos.carrinho.itens.map( e => {
           total = (e.qtd*e.livro_id.preco)+total;
        })
        return total
    }
    
}











module.exports = PedidoController