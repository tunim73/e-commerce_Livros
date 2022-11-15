import style from './DetalhesLivro.module.scss'
import Formulario from '../../components/Formulario';

const Pagamento = ({infos}) => {



    
    return ( 
    <div className={style.container}>            
        <Formulario  titulo = {infos.titulo} list={infos.listForPagPagamento} nomeBotao={infos.nomeBotao}/>
    </div>
    )


}


export default Pagmento