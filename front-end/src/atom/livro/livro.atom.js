import { atom } from 'recoil'
import { useApiLivro } from "../../hooks/useApiLivro";

const apiLivro = useApiLivro();

const stateInicialLivros = async () => {
    const list  = await apiLivro.todosLivros();
    return list
  }
  
  
export const livros = atom({
    key: 'livros',
    default: stateInicialLivros()
});

export const livroDestaque = atom({
    key: 'livroDestaque',
    default: {}
});