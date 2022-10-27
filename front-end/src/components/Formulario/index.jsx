import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'

const Formulario = (props) => {


    const listForms = [
        {
            label:'nome',
            id:'nome',
            type: 'text',
            placeholder:'Digite o nome do livro'
        },
        {
            label:'Categoria',
            id:'categoria',
            type: 'text',
            placeholder:'Insira as categorias pertencentes'
        },
        {
            label:'nome do livro',
            id:'fotoLivro',
            type: 'text',
            placeholder:'Insira a foto do livro'
        },
    ]
 


    return ( 
        <div className = { style.container } >
            <form className = { style.container }> 
                <h1>{props.formNome}</h1>
                <div>
                    {listForms.map(item => <CampoTexto item={item}/> )}
                </div>
               
                <Botao botao = 'Cadastrar' />
            </form> 
        </div> 
        )
}

export default Formulario
