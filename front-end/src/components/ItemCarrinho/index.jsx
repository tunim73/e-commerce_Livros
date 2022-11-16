import style from './ItemCarrinho.module.scss'
import { useSetRecoilState } from 'recoil';
import { removeItemCarrinho } from '../../atom/carrinho/carrinho.selectors';


export const ItemCarrinho = ({item}) => {

    const remove = useSetRecoilState(removeItemCarrinho);

    const removeItem = () =>{
        remove(item.id)
    }


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
                    <input className={style.botaoadd} type="button" value = "+" />
                    <input className={style.botaorem} type="button" value = "-" onClick={removeItem}/>
                </div>
            </div>
        )
}



