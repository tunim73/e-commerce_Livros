import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'

const Form = () => {


    return ( 
        <div className = { style.container } >
            <form className = { style.container }> 
                <CampoTexto campoNome = 'Digite o nome do Livro'/>
                <CampoTexto campoNome = 'Digite a edição do Livro'/>
                
            </form> 
        </div> 
        )
}

export default Form
