import style from './HistoricoPedido.module.scss'
import Titulo from '../../components/Titulo'
import Pedido from '../../components/Pedido(Hist)'
import { Botao } from '../../components/Botao'
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listLivros, livroDestaquePag } from '../../atom/livro/livro.selectors';

const HistoricoPedido = () => {
     
    const navigate = useNavigate();

    return ( 
    <>                
        <div className={style.wrap}>
            <Titulo forNome = "Histórico de Pedidos"/>    
            <Pedido forId="wkbewjbjebkwqnçlkwnien12432134" forDate="20/12/2022" forTotal="200,00" />
            <Pedido forId="wkbewjbjebkwqnçlkwnien12432134" forDate="20/12/2022" forTotal="200,00" />
            <NavLink to= '/historico'>
                <Botao botao="Atualizar Historico" /*click = { ()=>navigate('/historico') }*//>
            </NavLink>
   
        </div>

    </>
    )


}


export default HistoricoPedido