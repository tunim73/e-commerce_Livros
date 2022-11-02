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
            placeholder:'Insira as categorias do livro'
        },
        {
            label:'Foto do livro',
            id:'fotoLivro',
            type: 'file',
            placeholder:'Insira a imagem do livro'
        },
        {
            label:'Preço',
            id:'preco',
            type: 'text',
            placeholder:'Digite o preço'
        },
        {
            label:'Sinopse',
            id:'sinopse',
            type: 'text',
            placeholder:'Digite a sinopse do livro'
        },
        {
            label:'Autor',
            id:'autor',
            type: 'text',
            placeholder:'Digite o autor'
        },
        {
            label:'Edição',
            id:'edicao',
            type: 'text',
            placeholder:'Digite a edição'
        },
        {
            label:'Editora',
            id:'editora',
            type: 'text',
            placeholder:'Digite a editora'
        },
        {
            label:'Ano de lançamento',
            id:'preco',
            type: 'text',
            placeholder:'Digite o ano de lançamento do livro'
        },
    ]
 


    return ( 
        <div className = { style.container } >
            <form className = { style.container }> 
                <h1>{props.formNome}</h1>
                <div className='formulario'>
                    {listForms.map(item => <CampoTexto item={item}/> )}
                </div>
               
                <Botao botao = 'Cadastrar' />
            </form> 
        </div> 
        )
}

export default Formulario
