import imagemPrincipal from './assets/login.png'
import style from './ModalLogin.module.scss'
import { ModalBase } from "./ModalBase"
import Formulario from '../Formulario'


const ModalLogin = ({ forForm, aberto, aoFechar }) => {

    

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
                list ={forForm.list} 
                nomeBotao={forForm.nomeBotao} 
                titulo={forForm.titulo}
                />
            </div>
            
        </section>
        </ModalBase>
    )
        

    
}

export default ModalLogin