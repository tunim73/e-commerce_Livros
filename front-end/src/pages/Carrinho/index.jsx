import style from './Carrinho.module.scss'
import Titulo from '../../components/Titulo'
import {Carrosel} from '../../components/Carrosel'
import {CampoTotal} from '../../components/CampoTotal'
import { Botao } from '../../components/Botao'
import { NavLink, useNavigate } from 'react-router-dom';
import { ItemCarrinho } from '../../components/ItemCarrinho';
import { useRecoilValue } from 'recoil';
import { carrinho } from '../../atom/carrinho/carrinho.atom';
import { somaValoresCarrinho } from '../../atom/carrinho/valorTotalCarrinho.selectors';
import { usuarioLogado } from '../../atom/usuario/Login/loginselected';
import { listLivros } from '../../atom/livro/livro.selectors'

const Carrinho = () => {
    const listaCarrosel = useRecoilValue(listLivros);

    const total = useRecoilValue(somaValoresCarrinho);
    const list = useRecoilValue(carrinho);
    const usuario = useRecoilValue(usuarioLogado);

    
    const navigate = useNavigate();
    
    
    const aoFinalizarCompra = () => {
        
        if(usuario===true){
            //config e ir para pagina de finalizar compra navigate()
            navigate('/pagamento')
        }
        else {
            alert("Necessário fazer Login para continuar !");
        }

    }



    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = "Carrinho de Compras :"/>
            {list.map(item =>
            <ItemCarrinho key={`${item._id}+carrinho`} item={item.livro_id} qtd ={item.qtd}/>
            )}
            <CampoTotal valor = {total}/>
            <NavLink to='/catalogo'>
                <div className={style.Botao} >
                    <Botao botao="Adicionar outros produtos"/>
                </div>
            </NavLink>
            
                <div className={style.Botao} >
                    <Botao className={style.Botao.forBotao}
                    botao="Finalizar Compra"
                    click={aoFinalizarCompra}/>
                </div>
                <hr></hr>
                <Titulo forNome="Mais recomendações:"/>
                <Carrosel list={listaCarrosel}/>
        </div>  
       
    </>
    )
}
export default Carrinho