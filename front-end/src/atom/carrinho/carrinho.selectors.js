import { selector } from "recoil";
import { carrinho } from "./carrinho.atom";



export const addItemCarrinho = selector({
  key: 'addItemCarrinho',
  get: ({get}) => get(carrinho),
  set: ({set}, newItem) => {
    set(carrinho, oldList => [...oldList, newItem]);
  },
});



export const removeItemCarrinho = selector({
  key: 'removeItemCarrinho',
  get: ({get}) => get(carrinho),
  set: ({set}, id) => {
    set(carrinho, oldList =>  oldList.filter(item => item.id !=id));
  },
}); 
