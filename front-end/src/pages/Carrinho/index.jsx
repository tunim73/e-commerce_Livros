import style from './Carrinho.module.scss'

import Titulo from '../../components/Titulo'
import {Item} from '../../components/itemCarrinho'


const Carrinho = () => {
    return ( 
    <>

        <Titulo forNome = "Carrinho de Compras :"/>
        <Item/>
        
    </>
    )
}


export default Carrinho