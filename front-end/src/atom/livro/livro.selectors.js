import { selector } from "recoil";
import { livros, livroDestaque } from "./livro.atom"


export const listLivros = selector({
  key: 'listLivros',
  get: ({get}) => {
    const list = get(livros);
    return list
  },
  set: ({set, get}, newLivro) =>{
    set(livros, [...get(livros), newLivro])
  }

});

export const resetLivros = selector({
  key: "resetLivrosList",
  get: ({get}) => get(livros),
  set: ({reset}) => {
    reset(livros)
  }
})


export const livroDestaquePag = selector({
  key: 'livroDestaquePag',
  get: ({get}) => get(livroDestaque),
  set: ({set}, newLivro) => set(livroDestaque, newLivro)
});

