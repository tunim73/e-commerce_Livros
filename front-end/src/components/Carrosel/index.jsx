import style from './Carrosel.module.scss'
import {Card} from '../../components/ItemCatalogo'
import { itemCarrosel } from '../../data/itemCarrosel'



export const Carrosel = () => {

    return ( 
        <div className={style.container}>{itemCarrosel.map(item => 
        <Card key={`${item.id}+{item.nome}+${item.edicao}`} item={item}/>)}</div>
        )
}