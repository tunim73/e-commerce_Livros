import { atom } from 'recoil'
import { useApiPedido } from '../../hooks/useApiPedido';

export const stateIncialCarrinho = async() => {
    const text = localStorage.getItem('log');
    console.log("Text: ", text)
    if(!text) 
      return []
    
    const user = JSON.parse(text);
    const list  = await useApiPedido().todosItensCarrinho(user.pedido_id)
    console.log("Xuxa: ", user, list)
    if(list){
      return list.itens 
    }
    else {
      return []
    }
}

const stateIncialValorTotal = async() => {
  const text = localStorage.getItem('log');
  const user = JSON.parse(text);
  const list = await useApiPedido().todosItensCarrinho(user.pedido_id)
  
  console.log("total: ", list.total);
  if(list){
    return list.total 
  }
  else {
    return 0
  }
}

export const carrinho = atom({
    key: 'carrinho',
    default: stateIncialCarrinho()
  });

export const valorTotalCarrinho = atom({
  key: 'valorTotalCarrinho',
  default: 0
}); 
