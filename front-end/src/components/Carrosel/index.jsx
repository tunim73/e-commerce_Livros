import style from './Carrosel.module.scss'
import {Card} from '../../components/ItemCatalogo'
import { itemCarrinho } from '../../data/ItemCarrinho'



export const Carrosel = () => {

    return ( 
        <div className={style.container}>{itemCarrinho.map(item => <Card key={`${item.nome}+${item.edicao}`} item={item}/>)}</div>
        )
}