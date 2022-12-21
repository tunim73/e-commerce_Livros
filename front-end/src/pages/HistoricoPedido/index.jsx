import style from './HistoricoPedido.module.scss'
import Titulo from '../../components/Titulo'
import Pedido from '../../components/Pedido(Hist)'
import { Botao } from '../../components/Botao'
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listLivros, livroDestaquePag } from '../../atom/livro/livro.selectors';
import { useEffect, useState } from 'react';
import { useApiPedido } from '../../hooks/useApiPedido';
import { login } from '../../atom/usuario/Login/login.atom';

const HistoricoPedido = () => {
     
    const navigate = useNavigate();
    const [list, setList] = useState([])
    const usuario = useRecoilValue(login)

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


export default HistoricoPedido