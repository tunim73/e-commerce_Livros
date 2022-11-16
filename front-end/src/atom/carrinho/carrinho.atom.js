import { atom } from 'recoil'

export const carrinho = atom({
    key: 'carrinho',
    default: []
  });

export const valorTotalCarrinho = atom({
  key: 'valorTotalCarrinho',
  default: 0
}); 
