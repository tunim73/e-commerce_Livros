import style from './CampoTotal.module.scss'


export const CampoTotal = (props) => {
    return ( 
        <div className={style.container}>
            <hr/>
             <h1 className={style.total}>Total: R$ {props.valor.toFixed(2)}</h1>
        </div>
        )
}

