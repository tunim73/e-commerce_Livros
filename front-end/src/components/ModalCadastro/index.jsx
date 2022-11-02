import imagemPrincipal from './assets/login.png'
import style from './ModalCadastro.module.scss'
import { ModalBase } from "../ModalBase"
import Formulario from '../Formulario'


const ModalCadastro = ({ aberto, aoFechar }) => {

    const listLogin = [
        {
            label:'nome',
            id:'nome',
            type: 'text',
            placeholder:'Digite seu nome',
        },
        {
            label:'email',
            id:'email',
            type: 'email',
            placeholder:'Digite seu email',
        },
        {
            label:'senha',
            id:'senha',
            type: 'password',
            placeholder:'Digite sua senha',
        },
        {
            label:'Confirme sua senha',
            id:'confrimaSenha',
            type: 'password',
            placeholder:'Confirme sua senha novamente',
        }
    ]

    return (
        <ModalBase 
        aberto={aberto}
        aoFechar={aoFechar}
        > 

        <section className={style.corpoModalCadastro}>
            <figure>
                <img className src={imagemPrincipal} alt="pessoa segurando uma chave" />
            </figure>
            <div className={style.container}>
                <Formulario list ={listLogin} nomeBotao="Cadastrar" titulo ="Cadastro de Login"/>
    
            </div>
            
        </section>
        </ModalBase>
    )
        

    
}

export default ModalCadastro