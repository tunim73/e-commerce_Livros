import style from './Botao.module.scss'


export const Botao = (props) => {


    return ( 
        <div className = { style.container }>
                <input className={style.botaoConfirma} type = "submit" name = "#" 
                value = {props.botao} onClick={props.click} />
        </div>
        )
}
