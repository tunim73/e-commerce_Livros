import style from './Pagamento.module.scss'
import Formulario from '../../components/Formulario';
import { CampoTotal } from '../../components/CampoTotal';

const Pagamento = ({ infos }) => {

    
    return ( 
        
        <div className={style.container}>
            <Formulario titulo = {infos.titulo} list={infos.list} nomeBotao={infos.nomeBotao}/>
            <CampoTotal valor ="120,00"/>
        </div>
    )


}


export default Pagamento