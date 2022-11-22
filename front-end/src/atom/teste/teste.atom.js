import { atom } from "recoil";


export const myState = atom({
    key: 'MyKey',
    default: 1,
    effects: [
        ({setSelf}) => {
          setSelf(() => {
            const newId = 10;
            return newId
          });
        },
      ],
  });