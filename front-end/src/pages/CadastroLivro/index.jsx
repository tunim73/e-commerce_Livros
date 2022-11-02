import style from './CadastroLivro.module.scss'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Formulario from '../../components/Formulario';
const CadastroLivro = () => {

    const listForms = [
        {
            label:'Nome',
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
            type: 'date',
            placeholder:'Digite o ano de lançamento do livro'
        },
    ]

    return ( 
    <>
        <Header/>
        <Formulario titulo = "Cadastro de Livro"list={listForms} nomeBotao='Cadastrar'/>
        <Footer/>
    </>
    )


}


export default CadastroLivro