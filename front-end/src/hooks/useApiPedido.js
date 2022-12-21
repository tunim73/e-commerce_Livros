import { api } from "../services/api";


export const useApiPedido = () => ({

    addItemCarrinho: async (pedido_id, livro_id, action) => {
        const resposta = await api.patch(`/pedido/carrinho/${pedido_id}`, {
            livro_id, action
        },
        {
            validateStatus: (status) => {
              return status < 600; // Resolve somente se o código de status for menor que 500
            }
        }
        )
        return resposta.data   
    },


    todosItensCarrinho: async (pedido_id) => {

        const resposta = await api.get(`/pedido/carrinho/${pedido_id}`,
        {
            validateStatus: (status) => {
              return status < 600; // Resolve somente se o código de status for menor que 500
            }
        });
        console.log("Data itens carrinho: ",resposta.data)
        return resposta.data   

    }

})