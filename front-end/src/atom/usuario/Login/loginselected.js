import { selector } from "recoil";
import { login } from './login.atom'

export const usuarioLogado = selector({
  key: 'usarioLogado',
  get: ({get}) => {
    const user = get(login);
    if(user.id === "false")
      return false
    else 
      return true
    
},
  set: ({set}, newUser) => {
    
    if(newUser.user.id === "false"){
      localStorage.removeItem('authToken');
      localStorage.removeItem('log');
    }
    else {
      localStorage.setItem('authToken', newUser.token);     
      const text = JSON.stringify(newUser.user);
      localStorage.setItem('log', text)
    }

    set(login, newUser.user)
  }
});
