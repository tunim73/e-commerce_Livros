import style from './Pagamento.module.scss'
import Formulario from '../../components/Formulario';
import { listForPagPagamento } from '../../data/forForms';
import { CampoTotal } from '../../components/CampoTotal';
import { useRecoilValue } from 'recoil';
import { somaValoresCarrinho } from '../../atom/carrinho/valorTotalCarrinho.selectors';

const Pagamento = () => {

    const valor = useRecoilValue(somaValoresCarrinho);
    
    const aoPagar = (data) => {
        console.log("Dados de Pagamento: ", data)
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