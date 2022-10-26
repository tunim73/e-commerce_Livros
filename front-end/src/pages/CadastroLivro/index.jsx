import style from './CadastroLivro.module.scss'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import Form from '../../components/Formulario'
const CadastroLivro = () => {


    return ( 
    <>
        <Header/>
        <Form formNome = 'Cadastro de Livros'/>
        <Footer/>
    </>
    )


}


export default CadastroLivro