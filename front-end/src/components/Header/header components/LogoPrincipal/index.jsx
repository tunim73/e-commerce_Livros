import style from './LogoPrincipal.module.scss'

import { NavLink } from "react-router-dom";


const LogoPrincipal = () => {


    return(

        <div className= {style.container}>
            
            <img src="/public/assets/imagens/logo.png" alt="Logo da Crônicas e Papel" className={style.container__imagem}/>
            <h1 className={style.container__titulo}>
                <b className={style.container__titulo_negrito }>Crônicas&</b>Papel
            </h1>
                        
        </div>
    )


}

export default LogoPrincipal;