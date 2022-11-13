import style from './DetalhesAutor.module.scss'

import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
//import Vitrine from '../../components/VitrineDeLivros'

const DetalhesLivro = () => {
    return ( 
    <>

        <Titulo forNome = "Detalhes do Autor :"/>
        <Sinopse forNome = "Biografia" forResumo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Titulo forNome = "Outras Obras :"/>
        
        
    </>
    )
}


export default DetalhesLivro