import { selector } from "recoil";
import { carrinho } from "../carrinho.atom";

export const pCarrinho = selector({
    key: 'pCarrinho', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const car = get(carrinho);
  
      return car;
    },
  });
  