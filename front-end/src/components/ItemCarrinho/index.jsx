import style from './ItemCarrinho.module.scss'
import { useSetRecoilState } from 'recoil';
import { addItemCarrinho, auxAddItemCarrinho } from '../../atom/carrinho/carrinho.selectors';


export const ItemCarrinho = ({item, qtd}) => {

    const adiciona = useSetRecoilState(addItemCarrinho);
    
    const removeItem = async () =>{
        const newList = await auxAddItemCarrinho(item, "negativo");
        adiciona(newList)
    }
    const addItem = async () => {
        const newList = await auxAddItemCarrinho(item, "positivo");
        adiciona(newList)
    }


    return (         
        
            <div className={style.container} >
                <hr/>
                <div className={style.grid1}>
                    <img className={style.img} src={item.image} />
                </div>
                
                <div className={style.grid2}>
                    <h1 className={style.info}>{item.nome}</h1>
                    <h1 className={style.info}>Preço : R${item.preco}</h1>
                    <h1 className={style.info}>Qtd: {qtd}</h1>
                    <input className={style.botaoadd} type="button" value = "+" onClick={addItem}/>
                    <input className={style.botaorem} type="button" value = "-" onClick={removeItem}/>
                </div>
            </div>
        )
}



