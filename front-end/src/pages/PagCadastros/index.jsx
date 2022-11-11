import style from './PagCadastros.module.scss'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Formulario from '../../components/Formulario';

const PagCadastros = ({infos}) => {

    
    return ( 
        
        <div className={style.container}>
            <div className={style.container_forForm}>
                <Formulario titulo = {infos.titulo} list={infos.list} nomeBotao={infos.nomeBotao}/>
            </div>
        </div>
    )


}


export default PagCadastros