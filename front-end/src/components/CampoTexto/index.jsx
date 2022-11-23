import style from './CampoTexto.module.scss'


export const CampoTexto = ({item,register,errors}) => {
        
    return ( 
        (!errors[item.id])?
        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input 
                className={style.campo} 
                type = {item.type} name = {item.id} 
                placeholder = {item.placeholder}
                {...register(item.id)}
                />
        </div>
        :
        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input 
                className={style.invalidoCampo} 
                type = {item.type} name = {item.id} 
                placeholder = {errors[item.id]?.message}
                {...register(item.id)}
                />
                <span>{errors[item.id]?.message}</span>
        </div>

        )
}