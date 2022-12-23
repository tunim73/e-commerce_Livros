import { api, authHeaders } from "../services/api";


export const useApiLivro = () => ({

    novoLivro: async (novoLivro) => {
        authHeaders();
        const resposta = await api.post('/livro', {
            nome:novoLivro.nome,
            image:novoLivro.image,
            genero: novoLivro.genero,
            descricao: novoLivro.descricao,
            preco: novoLivro.preco,
            autor:novoLivro.autor
        },
        {
            validateStatus: (status) => {
              return status < 600; // Resolve somente se o código de status for menor que 500
            }
        }
        )
        return resposta.data   
    },

    todosLivros: async () => {

        const resposta = await api.get('/livros',
        {
            validateStatus: (status) => {
              return status < 600; // Resolve somente se o código de status for menor que 500
            }
        });
        return resposta.data   

    }

})