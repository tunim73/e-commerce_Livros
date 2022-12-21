import style from './DetalhesAutor.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import { Carrosel } from '../../components/Carrosel'
import { useRecoilValue } from 'recoil'
import { autorDestaquePag } from '../../atom/autor/autor.selectors'
import { listLivros } from '../../atom/livro/livro.selectors'


const DetalhesAutor = () => {

    const autor = useRecoilValue(autorDestaquePag);
    const listaCarrosel = useRecoilValue(listLivros);

    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = {autor.nome} />
            <img className={style.img} src={autor.image} />
            <Sinopse forNome = "Biografia" forResumo = {autor.biografia}/>
            <Titulo forNome = "Outras Obras :"/>
            <Carrosel list={listaCarrosel} />
        </div>
        
    </>
    )
}


export default DetalhesAutor