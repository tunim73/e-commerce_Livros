import style from './Carrinho.module.scss'
import Titulo from '../../components/Titulo'
import {Item} from '../../components/ItemCarrinho'
import {CampoTotal} from '../../components/CampoTotal'

const Carrinho = () => {
    return ( 
    <>

        <Titulo forNome = "Carrinho de Compras :"/>
        <Item/>
        <Item/>
        <Item/>
        <CampoTotal/>
    </>
    )
}


export default Carrinho