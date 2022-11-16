import style from './PagCadastros.module.scss'
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