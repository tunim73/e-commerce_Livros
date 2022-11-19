import { selector } from "recoil";
import { useApiLivro } from "../../hooks/useApiLivro";

const livros = useApiLivro();


export const todosOsLivros = selector({
  key: 'todosOsLivros',
  get: async () =>{
    try{
      const list = await livros.todosLivros();
      return list || []
    }catch(error){
      console.error(error);
      return []
    }
  }
});


