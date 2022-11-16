import style from './DetalhesAutor.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import { Carrosel } from '../../components/Carrosel'
import { useRecoilValue } from 'recoil'
import { autorPrincipal } from '../../atom/autor/autor.selectors'
import { itemCarrosel } from '../../data/itemCarrosel'


const DetalhesAutor = () => {

    const autor = useRecoilValue(autorPrincipal);

    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = {autor.nome} />
            <img className={style.img} src={autor.img} />
            <Sinopse forNome = "Biografia" forResumo = {autor.biografia}/>
            <Titulo forNome = "Outras Obras :"/>
            <Carrosel list={itemCarrosel} />
        </div>
        
    </>
    )
}


export default DetalhesAutor