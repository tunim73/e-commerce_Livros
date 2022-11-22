import { selector } from "recoil";
import { autores, autorDestaque } from "./autor.atom";

export const listAutores = selector({
  key: 'autoresDestaques',
  get: ({get}) =>{
    const list = get(autores);
    return list
  },
  set: ({set, get}, newAutor) => {
    set(autores,[...get(autores), newAutor])
  }
});

export const resetAutores = selector({
  key: "resetAutoresList",
  get: ({get}) => get(autores),
  set: ({reset}) => {
    reset(autores)
  }
})


export const autorDestaquePag = selector({
  key: 'autorDestaquePag',
  get: ({get}) => get(autorDestaque),
  set: ({set}, newAutor) => set(autorDestaque, newAutor)
});


