import { api, authHeaders } from "../services/api";


export const useApiPedido = () => ({

    addItemCarrinho: async (pedido_id, livro_id, action) => {
        authHeaders();
        const resposta = await api.patch(`/pedido/carrinho/${pedido_id}`, {
            livro_id, action
        },
        {
            validateStatus: (status) => {
              return status < 600; 
            }
        }
        )
        return resposta.data   
    },


    todosItensCarrinho: async (pedido_id) => {
        authHeaders();
        const resposta = await api.get(`/pedido/carrinho/${pedido_id}`,
        {
            validateStatus: (status) => {
              return status < 600; 
            }
        });
        return resposta.data   

    },
    addItemHistorico: async (pedido_id, itens, total, dadosUsuario) => {
        authHeaders();
        const resposta = await api.patch(`/pedido/historico/${pedido_id}`, {
            dadosUsuario,
            itens,
            total
        },
        {
            validateStatus: (status) => {
              return status < 600; // Resolve somente se o código de status for menor que 500
            }
        }
        )
        return resposta.data   
    },
    todosItensHistorico: async (pedido_id) => {
        authHeaders();
        const resposta = await api.get(`/pedido/historico/${pedido_id}`,
        {
            validateStatus: (status) => {
              return status < 600; 
            }
        });
        return resposta.data   

    },
})
