import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'

const Form = (props) => {


    return ( 
        <div className = { style.container } >
            <form className = { style.container }> 
                <h1>{props.formNome}</h1>
                <CampoTexto campoNome = 'Digite o nome do Livro'/>
                <CampoTexto campoNome = 'Digite a edição do Livro'/>
                <Botao botao = 'Cadastrar' />
            </form> 
        </div> 
        )
}

export default Form
