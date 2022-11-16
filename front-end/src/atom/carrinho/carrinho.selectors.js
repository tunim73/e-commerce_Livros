import { selector } from "recoil";
import { carrinho } from "./carrinho.atom";



export const addItemCarrinho = selector({
  key: 'addItemCarrinho',
  get: ({get}) => get(carrinho),
  set: ({set}, newItem) => {
    set(carrinho, list => {

      const item = list.find(element => element.id == newItem.id);

      if(item === undefined){
        return [...list, newItem]
      }
      else {
          const newList = list.filter(element => element.id != item.id);
          const itemAtualizado = {
            ...item,
            qtd:item.qtd+1,
          }
        
          newList.push(itemAtualizado);  
          return newList;
      }
    });
  },
});



export const removeItemCarrinho = selector({
  key: 'removeItemCarrinho',
  get: ({get}) => get(carrinho),
  set: ({set}, id) => {
    set(carrinho, list =>{

      const item = list.find(element => element.id == id);

      if(item.qtd === 0 || item. qtd === 1){
        return list.filter(element => element.id !=id)
      }
      else {
          const newList = list.filter(element => element.id != id);
          const itemParaAtualizar = list.find(element => element.id == id);

          const itemAtualizado = {
            ...itemParaAtualizar,
            qtd:itemParaAtualizar.qtd-1,
          }
        
          newList.push(itemAtualizado);  
          return newList;
      }

    }    
  )}
  
}); 

/*
export const atualizaMaisQtdItemCarrinho = selector({
  key: 'atualizaItemCarrinho',
  get: ({get}) => get(carrinho),
  set: ({set}, id) => {
    set(carrinho, list =>  {
      
      const newList = list.filter(element => element.id != id);
      const itemParaAtualizar = list.find(element => element.id == id);

      const itemAtualizado = {
        ...itemParaAtualizar,
        qtd:itemParaAtualizar.qtd+1,
      }
      
      newList.push(itemAtualizado);  
      return newList;
    }

  )}
})

*/
    

export const localizaItemCarrinho = (list,id) => {
  const item = list.find(element => element.id == id)
  return (item)? item : false
}
