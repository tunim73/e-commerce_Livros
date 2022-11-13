import style from './Carrinho.module.scss'
import Titulo from '../../components/Titulo'
import {Item} from '../../components/ItemCarrinho'
import {CampoTotal} from '../../components/CampoTotal'
import { Botao } from '../../components/Botao'
import { NavLink } from 'react-router-dom';

const Carrinho = () => {
    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = "Carrinho de Compras :"/>
            <Item/>
            <CampoTotal/>
            <NavLink to='/'>
                <div className={style.Botao} >
                    <Botao botao="Volta as Compras"/>
                </div>
            </NavLink>
            <NavLink to='/' className= {style.container}>
                <div className={style.Botao} >
                    <Botao className={style.Botao.forBotao} botao="Finalizar Compra"/>
                </div>
            </NavLink>    
        </div>  
       
    </>
    )
}
export default Carrinho