import style from './HistoricoPedido.module.scss'
import Titulo from '../../components/Titulo'
import Pedido from '../../components/Pedido(Hist)'
import { Botao } from '../../components/Botao'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listLivros, livroDestaquePag } from '../../atom/livro/livro.selectors';

const HistoricoPedido = () => {
     


    return ( 
    <>                
        <div className={style.wrap}>
            <Titulo forNome = "Histórico de Pedidos"/>    
            <Pedido forId="wkbewjbjebkwqnçlkwnien12432134" forDate="20/12/2022" forTotal="200,00" />
            <Botao botao="Atualizar Historico"/>
   
        </div>

    </>
    )


}


export default HistoricoPedido