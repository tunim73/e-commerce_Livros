import style from './Carrinho.module.scss'
import Titulo from '../../components/Titulo'
import {CampoTotal} from '../../components/CampoTotal'
import { Botao } from '../../components/Botao'
import { NavLink } from 'react-router-dom';
import { ItemCarrinho } from '../../components/ItemCarrinho';
import { useRecoilValue } from 'recoil';
import { carrinho } from '../../atom/carrinho/carrinho.atom';
import { somaValoresCarrinho } from '../../atom/carrinho/valorTotalCarrinho.selectors';


const Carrinho = () => {
    
    const total = useRecoilValue(somaValoresCarrinho);
    const list = useRecoilValue(carrinho);
    
    
    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = "Carrinho de Compras :"/>
            {list.map(item =>
            <ItemCarrinho key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>
            )}
            <CampoTotal valor = {total}/>
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