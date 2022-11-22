import style from './Home.module.scss'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import {Carrosel} from '../../components/Carrosel'
import { useRecoilValue } from 'recoil'
import { listLivros } from '../../atom/livro/livro.selectors'

const Home = () => {

    const listaCarrosel = useRecoilValue(listLivros);
    
    return (
        <div className={style.container}>
            <Banner/>
            <Titulo forNome="Livros em destaque:"/>
            <Carrosel list={listaCarrosel}/>
        </div>
    )

    
}


export default Home