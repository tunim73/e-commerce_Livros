import style from './CampoTotal.module.scss'


export const CampoTotal = () => {

    return ( 
        <div className={style.container}>
            <hr/>
             <h1 className={style.total}>Total: R$ 60,00</h1>
        </div>
        )
}

