import style from './CampoTexto.module.scss'


export const CampoTexto = ({item,/*valido,invalido*/}) => {

    return ( 
        /*(invalido) ?*/
        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input className={style.invalidoCampo} type = {item.type} name = {item.id} 
                placeholder = {item.placeholder} minLength={item.minLength} maxLength = {item.maxlength} pattern={item.pattner} required = {item.required}/> 
        </div>/*
        :
        
        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input className={style.campo} type = {item.type} name = {item.id} 
                placeholder = {item.placeholder} maxLength = {item.maxlength} required = {item.required}/> 
        </div>*/
        )
}


