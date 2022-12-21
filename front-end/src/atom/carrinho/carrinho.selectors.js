import { selector } from "recoil";
import { useApiPedido } from "../../hooks/useApiPedido";
import { carrinho } from "./carrinho.atom";



export const addItemCarrinho = selector({
  key: 'addItemCarrinho',
  get: ({get}) => get(carrinho),
  set:  ({set}, newList) => {
    set(carrinho,newList.itens)
  
  }
});

export const atualizaCarrinho = () => {
  
}

export const auxAddItemCarrinho = async (newItem, action) => {

  const text = localStorage.getItem('log');
    const user = JSON.parse(text);
    const itemUpdated = await useApiPedido().addItemCarrinho(
      user.pedido_id, 
      newItem._id, 
      action
    )
    return itemUpdated

}

export const localizaItemCarrinho = (list,id) => {
  const item = list.find(element => element.id == id)
  return (item)? item : false
}


