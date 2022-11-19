import { api } from "../services/api";


export const useApiAutor = () => ({

    novoAutor: async (novoAutor) => {
        
        const resposta = await api.post('/autor', {
            nome:novoAutor.nome,
            img:novoAutor.img,
            generos: novoAutor.generos,
            biografia: novoAutor.biografia,
            link:"autor/detalhes"
        },
        {
            validateStatus: (status) => {
              return status < 500; // Resolve somente se o código de status for menor que 500
            }
        }
        )
        return resposta.data   
    },
    autoresDestaque: async () => {

        const resposta = await api.get('/autor');
        return resposta.data   

    }

})