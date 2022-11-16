import style from './CampoTexto.module.scss'


export const CampoTexto = ({item,register,errors}) => {
        
    const id = item.id;    
    return ( 

        <div className={style.container}>
                <label className={style.label}>{item.label}</label> 
                <input 
                className={style.campo} 
                type = {item.type} name = {item.id} 
                placeholder = {item.placeholder}
                {...register(item.id)}
                /> 
                {/*(errors.id)? <span>xuxa</span>:""*/}

        </div>

        )
}


