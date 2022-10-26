import style from './CampoTexto.module.scss'


export const CampoTexto = (props) => {


    return ( 
        <div className = { style.container }>
                <div className='campoTexto'>
                        <label className='campoTexto'>{props.campoNome}</label> 
                        <input type = "text" name = "#" 
                        placeholder = {props.campoNome} /> 
                </div>
                
        </div> 
        )
}


