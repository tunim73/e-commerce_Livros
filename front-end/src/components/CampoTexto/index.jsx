import style from './CampoTexto.module.scss'


export const CampoTexto = ({item}) => {

    return ( 
        <div className={style.container}>
                <label className={style.label}>{item.label}</label><br/> 
                <input className={style.campo} type = {item.type} name = {item.id} 
                placeholder = {item.placeholder} /> 
        </div>
        )
}


