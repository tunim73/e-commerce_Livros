import style from './Catalogo.module.scss'
import {Card} from '../../components/ItemCatalogo'
import Titulo from '../../components/Titulo'
import { itemCarrinho } from '../../data/itemCarrinho' 

const Catalogo = () => {
    return ( 
    <>
    <div className={style.container}>
        <Titulo forNome = "Catalogo"/>
        {itemCarrinho.map(item => <Card key={`${item.id}`} item={item}/>)}
    </div>

    </>
    )
}


export default Catalogo