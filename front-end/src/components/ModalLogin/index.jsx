import imagemPrincipal from './assets/login.png'
import style from './ModalLogin.module.scss'
import { ModalBase } from "../ModalBase"

const ModalLogin = ({ aberto, aoFechar }) => {

    return (
        <ModalBase 
        aberto={aberto}
        aoFechar={aoFechar}
        titulo="Login"
        > 

        <section className={style.corpoModalCadastro}>
            <figure>
                <img className src={imagemPrincipal} alt="pessoa segurando uma chave" />
            </figure>
            <div className={style.container}>
                
                
                <label>Opa Funcionou </label>
                <input className ={style.campoTextoInput}typy='text'></input>
            </div>
            
        </section>
        </ModalBase>
    )
        

    
}

export default ModalLogin