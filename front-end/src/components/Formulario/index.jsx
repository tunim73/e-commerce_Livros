import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'
import  Titulo  from '../Titulo'


const Formulario = (props) => {


    return ( 
        <div className = { style.container } >
            <form className = { style.container }> 
                <div className={style.formulario}>
                    <Titulo className={style.titulo} forNome={props.titulo} />
                    {props.list.map(item => 
                    <CampoTexto key={`#${item.label}#${props.titulo}`} item={item}/>)}
                    <Botao botao = {props.nomeBotao}/>
                </div>
            </form> 
        </div> 
        )
}

export default Formulario
