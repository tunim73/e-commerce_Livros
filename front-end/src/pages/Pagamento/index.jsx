import style from './Pagamento.module.scss'
import Formulario from '../../components/Formulario';
import { listForPagPagamento } from '../../data/forForms';
import { CampoTotal } from '../../components/CampoTotal';
import { useRecoilValue } from 'recoil';
import { somaValoresCarrinho } from '../../atom/carrinho/valorTotalCarrinho.selectors';
import { useApiPedido } from '../../hooks/useApiPedido';
import { carrinho } from '../../atom/carrinho/carrinho.atom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../atom/usuario/Login/login.atom';

const Pagamento = () => {

    const valor = useRecoilValue(somaValoresCarrinho);
    const itens = useRecoilValue(carrinho);
    const usuario = useRecoilValue(login)
    const navigate = useNavigate();


    const aoPagar = async (data) => {
        

        const newPagamento = await useApiPedido().addItemHistorico(usuario.pedido_id, itens, valor, data);

        if(newPagamento.status === true ){
            alert("Pagamento realizado com sucesso ! ");
            navigate("/")
        }
        else {
            alert(newPagamento.msg)
        }

    }


    return ( 
        <>
            <CampoTotal valor ={valor} />
            <div className={style.container}>
                <Formulario 
                titulo = {listForPagPagamento.titulo} 
                list={listForPagPagamento.list} 
                nomeBotao={listForPagPagamento.nomeBotao}
                schema={listForPagPagamento.schema}
                aoSubmit={aoPagar} 
                />
            </div>
        </>
        
    )
        


}


export default Pagamento

