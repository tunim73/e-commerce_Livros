import { selector } from "recoil";
import { login } from './login.atom'

export const usarioLogado = selector({
  key: 'usarioLogado',
  get: ({get}) => {
    const user = get(login);
    
    if(Object.keys(user).length === 0)
        return false
    else
        return true  
},
  set: ({set}, newUser) => set(login, newUser)
});
