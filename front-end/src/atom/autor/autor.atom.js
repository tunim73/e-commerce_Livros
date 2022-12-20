import { atom } from 'recoil'
import { useApiAutor } from "../../hooks/useApiAutor";

const apiAutor = useApiAutor();

const stateInicialAutores = async () => {
  const list  = await apiAutor.todosAutores();
  //fazer verificaçõs adequadas, caso nao tenha lista da api à ser entregue
  return list 
}

export const autores = atom({
    key: 'autores',
    default:stateInicialAutores(),
    effects:[
      ({onSet}) => {
        onSet(newID => {
          console.log("Changes autores:", newID);
        });
      },
    ]
  });

export const autorDestaque = atom({
  key: 'autorDestaque',
  default:{},
  effects: [
    ({onSet}) => {
      onSet(newID => {
        console.log("Current user ID:", newID);
      });
    },
  ],
})