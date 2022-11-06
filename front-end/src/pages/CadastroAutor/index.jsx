import style from './CadastroAutor.module.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Formulario from '../../components/Formulario';

const CadastroAutor = () => {

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
        label:'Foto do Autor',
        id:'fotoDoAutor',
        type: 'file',
        placeholder:'Insira a imagem do Autor'
    },
    {
        label:'Data de Nascimento',
        id:'dataDeNascimento',
        type: 'text',
        placeholder:'XX/XX/XXXX'
    },
    {
        label:'Biografia',
        id:'biografia',
        type: 'text',
        placeholder:'Digite a biografia do autor'
    }
]

return ( 
<>
    <Header/>
    <Formulario list={listForms} botao="Cadastrar" titulo='Cadastro de Autores'/>
    <Footer/>
</>
)
}



export default CadastroAutor;