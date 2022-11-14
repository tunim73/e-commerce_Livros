import style from './Catalogo.module.scss'
import {Card} from '../../components/ItemCatalogo'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
//import Vitrine from '../../components/VitrineDeLivros'
import { itemCarrinho } from '../../data/ItemCarrinho' 
const Catalogo = () => {
    return ( 
    <>
    <div className={style.container}>
        <Titulo forNome = "Catalogo"/>
        {itemCarrinho.map(item => <Card key={`${item.nome}+${item.edicao}`} item={item}/>)}
    </div>
        
    </>
    )
}


export default Catalogo