import { selector, selectorFamily } from "recoil";
import { autor } from "./autor.atom";
import { useApiAutor } from "../../hooks/useApiAutor";

const autores = useApiAutor();


/*
export const autoresList = selector({
  key: 'autoresList',
  get: ({get}) => {
    
    const list = get(autor)
    return list || [{
      id:1,
      nome: 'Verônica Roth',
      link: '/autor/detalhes',
      img: 'http://3.bp.blogspot.com/-pcVWZX0pkLE/VQzNfqBrONI/AAAAAAAAAc8/rW0H513lVZo/s1600/11041479_804314206302217_1360023387_n.jpg',
      generos: 'romance, drama',
      biografia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor elit et libero faucibus ultrices. Aenean et sem nibh. Donec non diam at ipsum vestibulum rutrum. Phasellus eget sodales orci.'
  }]
  }
});
*/

export const autoresDestaques = selector({
  key: 'autoresDestaques',
  get: async () =>{
    try{
      const list = await autores.autoresDestaque()
      return list || []
    }catch(error){
      console.error(error);
      return []
    }
  },
  set: async ({set}) => {
    set(autor, list)
  }
});






export const autorPrincipal = selector({
  key: 'autorPrincipal',
  get: ({get}) => get(autor),
  set: ({set}, newAutor) => set(autor, newAutor)
});


