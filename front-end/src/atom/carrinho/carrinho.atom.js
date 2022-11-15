import { atom } from 'recoil'
import { itemCarrinho } from '../../data/itemCarrinho';


export const carrinho = atom({
    key: 'carrinho',
    default: []
  });