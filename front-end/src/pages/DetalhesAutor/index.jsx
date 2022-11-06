import style from './DetalhesAutor.module.scss'
import Header from "../../components/Header";
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import {Botao} from '../../components/Botao'
const DetalhesLivro = () => {
    return ( 
    <>
        <Header/>

        <div className={style.container}>
          <Titulo forNome = "Autor"/>
          <img className={style.img} src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png" />
          <Sinopse forNome = "Biografia" forResumo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        </div>
        <Footer/>
    </>
    )
}


export default DetalhesLivro