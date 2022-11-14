import style from './Carrinho.module.scss'
import Titulo from '../../components/Titulo'
import {CampoTotal} from '../../components/CampoTotal'
import { Botao } from '../../components/Botao'
import { NavLink } from 'react-router-dom';
import { ItemCarrinho } from '../../components/ItemCarrinho';
import { itemCarrinho } from '../../data/ItemCarrinho' 


const Carrinho = () => {
    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = "Carrinho de Compras :"/>
            {itemCarrinho.map(item =>
            <ItemCarrinho key={`${item.nome}+${item.edicao}`} item={item}/>
            )}
            <CampoTotal valor = "120,00"/>
            <NavLink to='/catalogo'>
                <div className={style.Botao} >
                    <Botao botao="Adicionar outros produtos"/>
                </div>
            </NavLink>
            <NavLink to='/'>
                <div className={style.Botao} >
                    <Botao className={style.Botao.forBotao} botao="Finalizar Compra"/>
                </div>
            </NavLink>    
        </div>  
       
    </>
    )
}
export default Carrinho