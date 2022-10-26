import style from './Home.module.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Form from '../../components/Formulario'

const Home = () => {


    return (
    <>
        <Header/>
        <Banner/>
        <Form formNome = 'Cadastro de Livro'/>
        <Footer/>
    </>
    )
}


export default Home