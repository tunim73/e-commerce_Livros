import { atom } from 'recoil'
import { useApiUsuario } from '../../../hooks/useApiUsuario'

const stateInicialLogin = async () => {

  const storeData = localStorage.getItem('authToken');
    if(storeData){
      const data = await useApiUsuario().verificaUsuarioLogadoPreviamente(storeData);

        if(data.status === true)
          return data.user          
        else {
          localStorage.removeItem('authToken');
          sessionStorage.removeItem('log');
          return {
            id:"false",
            nome:"false",
            pedido_id:"false"
          }
        }
    }
    else 
      return {
        id:"false",
        nome:"false",
        pedido_id:"false"
        }
      

}

export const login = atom({
    key: 'login',
    default: stateInicialLogin()
  });