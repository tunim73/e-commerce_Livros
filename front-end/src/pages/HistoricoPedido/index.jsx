import style from './HistoricoPedido.module.scss'
import Titulo from '../../components/Titulo'
import Pedido from '../../components/Pedido(Hist)'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useApiPedido } from '../../hooks/useApiPedido';
import { login } from '../../atom/usuario/Login/login.atom';
import { usuarioLogado } from '../../atom/usuario/Login/loginselected';

const HistoricoPedido = () => {
     
    const navigate = useNavigate();
    const [list, setList] = useState([])
    const usuario = useRecoilValue(login)
    const logado = useRecoilValue(usuarioLogado);
    const integra = async () => {
        const his = await useApiPedido().todosItensHistorico(usuario.pedido_id);
        if(his.status === true){
            setList(his.historico.historico)
        }
        console.log("his.historico.historico", his.historico.historico)
    }


    useEffect(()=>{
        integra()

    }, [])
    /*{list, forId, dorDate, forPagamento, forEnd, forTotal }*/

    if(logado===true){

        return ( 
        <>                
            <div className={style.wrap}>
                <Titulo forNome = "Histórico de Pedidos"/>   
                {list.map(e => <Pedido 
                forId={e._id}
                forPagamento ={e.dadosUsuario.finalCartao}
                forEnd={e.dadosUsuario.endereco}
                forDate={e.createdAt} 
                forTotal={e.total}
                forList={e.itens}
                />
                )} 
                
       
            </div>
    
        </>
        )

    }
    else {
        <>
            <h1>Não autorizado</h1>
        </>
    }


}


export default HistoricoPedido