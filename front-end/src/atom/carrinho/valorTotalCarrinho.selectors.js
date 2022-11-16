import { selector } from "recoil";
import { carrinho, valorTotalCarrinho } from "./carrinho.atom";


export const somaValoresCarrinho = selector({
    key: 'addItemCarrinho',
    get: ({get}) => 
    get(carrinho),
    
  });
  