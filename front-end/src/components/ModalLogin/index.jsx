import imagemPrincipal from './assets/login.png'
import style from './ModalLogin.module.scss'
import { ModalBase } from "./ModalBase"
import Formulario from '../Formulario'


const ModalLogin = ({ aberto, aoFechar, list, forForm }) => {

    

    return (
        <ModalBase 
        aberto={aberto}
        aoFechar={aoFechar}
        > 

        <section className={style.corpoModal}>
            <figure>
                <img src={imagemPrincipal} alt="pessoa segurando uma chave" />
            </figure>
            <div className={style.containerForms}>
                <Formulario 
                list ={list} 
                nomeBotao={forForm.nomeBotao} 
                titulo={forForm.titulo}
                />
            </div>
            
        </section>
        </ModalBase>
    )
        

    
}

export default ModalLogin