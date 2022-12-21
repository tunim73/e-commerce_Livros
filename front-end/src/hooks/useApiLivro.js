import { api } from "../services/api";


export const useApiLivro = () => ({

    novoLivro: async (novoLivro) => {
        
        const resposta = await api.post('/carrosel', {
            nome:novoLivro.nome,
            imagem:novoLivro.imagem,
            genero: novoLivro.categoria,
            sinopse: novoLivro.sinopse,
            preco: novoLivro.preco,
        },
        {
            validateStatus: (status) => {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }
        }
        )
        return resposta.data   
    },

    todosLivros: async () => {

        const resposta = await api.get('/livros');
        return resposta.data   

    }

})

/*
    {
      "id": 1,
      "nome": "Ah, não é um livro",
      "genero": "drama,coach",
      "preco": 20.95,
      "qtd": 1,
      "imagem": "https://www.carochinhaeditora.com.br/wp-content/uploads/2021/01/Ah-nao_E01_CAPA-V1.png",
      "sinopse": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor elit et libero faucibus ultrices. Aenean et sem nibh. Donec non diam at ipsum vestibulum rutrum. Phasellus eget sodales orci."
    }
*/