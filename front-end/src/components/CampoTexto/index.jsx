import style from './CampoTexto.module.scss'


export const CampoTexto = ({item}) => {

    return ( 
        <div className={style.campoTexto}>
                <label className={style.campoTexto}>{item.label}</label> 
                <input type = {item.type} name = {item.id} 
                placeholder = {item.placeholder} /> 
        </div>
        )
}


