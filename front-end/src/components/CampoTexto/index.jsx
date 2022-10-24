import style from './CampoTexto.module.scss'


export const CampoTexto = (props) => {


    return ( 
        <div className = { style.container }>
                <label>{props.campoNome}</label> 
                <input type = "text" name = "#" 
                placeholder = {props.campoNome} /> 
        </div> 
        )
}


