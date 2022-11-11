import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'
import  Titulo  from '../Titulo'


const Formulario = (props) => {


    return ( 
            <form className = {style.formulario}> 
                <Titulo forNome={props.titulo} />
                {props.list.map(item => 
                <CampoTexto key={`#${item.label}#${props.titulo}`} item={item}/>)}
                <Botao botao = {props.nomeBotao}/>
            </form> 
        )
}

export default Formulario
