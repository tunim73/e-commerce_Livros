import style from './Carrosel.module.scss'
import {Card} from '../../components/ItemCatalogo'


export const Carrosel = ({list}) => {

    return ( 
        <div className={style.container}>{list.map(item => 
            <Card key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>)}
        </div>
    )
}