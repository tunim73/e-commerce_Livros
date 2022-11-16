import { selector } from "recoil";
import { autor } from "./autor.atom";



export const autorPrincipal = selector({
  key: 'autorPrincipal',
  get: ({get}) => get(autor),
  set: ({set}, newAutor) => set(autor, newAutor)
});