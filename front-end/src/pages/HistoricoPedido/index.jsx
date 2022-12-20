import style from './HistoricoPedido.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import { Botao } from '../../components/Botao'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listLivros, livroDestaquePag } from '../../atom/livro/livro.selectors';

const HistoricoPedido = () => {
     


    return ( 
    <>                
        <div className={style.wrap}>
            <Titulo forNome = "Histórico de Pedidos"/>    
            
            <Botao botao="Atualizar Historico"/>
   
        </div>

    </>
    )


}


export default HistoricoPedido