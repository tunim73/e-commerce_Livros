import style from './ItemCarrinho.module.scss'
import { useSetRecoilState } from 'recoil';
import { carrinho } from '../../atom/carrinho/carrinho.atom';

export const ItemCarrinho = ({item}) => {

const setItensCarrinho = useSetRecoilState(carrinho)


    const addItem = () => {
        setItensCarrinho((oldList) => [
          ...oldList,
          {
            id:1,
        nome: "JJJ Abrhams",
        preco: "20,00",
        qtd: "1",
        imagem: "https://www.carochinhaeditora.com.br/wp-content/uploads/2021/01/Ah-nao_E01_CAPA-V1.png",
          },
        ]);
      };


    return (         
        
            <div className={style.container} >
                <hr/>
                <div className={style.grid1}>
                    <img className={style.img} src={item.imagem} />
                </div>
                
                <div className={style.grid2}>
                    <h1 className={style.info}>{item.nome}</h1>
                    <h1 className={style.info}>Preço : R${item.preco}</h1>
                    <h1 className={style.info}>Qtd: {item.qtd}</h1>
                    <input className={style.botaoadd} type="button" value = "+" onClick={addItem} />
                    <input className={style.botaorem} type="button" value = "-" />
                </div>
            </div>
        )
}



