import { selector } from "recoil";
import { carrinho, valorTotalCarrinho } from "./carrinho.atom";


export const somaValoresCarrinho = selector({
    key: 'somaValoresCarrinho',
    get: ({get}) => {
      const list = get(carrinho);
      let total = get(valorTotalCarrinho);

      list.map(element => {
        total = (element.preco*element.qtd)+total;
      })

      return total
    }

  });