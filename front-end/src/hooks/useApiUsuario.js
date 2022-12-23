import { api, authHeaders } from "../services/api";

export const useApiUsuario = () => ({

    cadastroDeUsuario: async({nome, email,senha}) => {
        try{
            const resposta = await api.post('/user', {
                nome,
                email,
                senha
            },
            {
                validateStatus: (status) => {
                  return status < 600; // Resolve somente se o código de status for menor que 500
                }
            })

            return resposta.data;
        } catch (error) {
            return {status:false, msg:"erro na requisição"}
        }
    },

    login:async({email,senha}) => {
        try{
            const resposta = await api.post('/login', {
                email,
                senha
            },
            {
                validateStatus: (status) => {
                  return status < 600; // Resolve somente se o código de status for menor que 600
                }
            })
            return resposta.data;
        } catch (error) {
            console.error(error)
            return {status:false, msg:"erro na requisição"}
        }
    },

    verificaUsuarioLogadoPreviamente: async(token) => {

        try{
            const resposta = await api.post('/validateToken', {
                token
            },
            {
                validateStatus: (status) => {
                  return status < 600; // Resolve somente se o código de status for menor que 600
                }
            })
            return resposta.data;
        } catch (error) {
            console.error(error)
            return {status:false, msg:"erro na requisição"}
        }
    }



})