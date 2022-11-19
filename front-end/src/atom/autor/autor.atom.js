import { atom, atomFamily, selectorFamily } from 'recoil'

import { useApiAutor } from "../../hooks/useApiAutor";

const autores = useApiAutor();
//const list  = await autores.autoresDestaque()

export const autor = atom({
    key: 'autor',
    default:[],
  });

  










/*
export const autoresDestaques = selectorFamily({
  key: 'autoresDestaques',
  get: async () => await autores.autoresDestaque(),
  set: async ({set}) => {
    set(autor, list)
  }
});

selectorFamily({
      key: 'autoresDestaques-listInicial',
      get: async () => { return await autores.autoresDestaque()}
    })

*/