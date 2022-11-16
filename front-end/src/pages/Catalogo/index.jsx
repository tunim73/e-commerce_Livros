import style from './Catalogo.module.scss'
import {Card} from '../../components/ItemCatalogo'
import Titulo from '../../components/Titulo'
//import { itemCarrinho } from '../../data/itemCarrinho' 
import { itemCarrosel } from '../../data/itemCarrosel'

const Catalogo = () => {
    return ( 
    <>
    <div className={style.container}>
        <Titulo forNome = "Catalogo"/>
        {itemCarrosel.map(item => <Card key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>)}
    </div>

    </>
    )
}


export default Catalogo