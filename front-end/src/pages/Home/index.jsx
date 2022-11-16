import style from './Home.module.scss'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import {Carrosel} from '../../components/Carrosel'
import { itemCarrosel } from '../../data/itemCarrosel'

const Home = () => {


    return (
        <div className={style.container}>
            <Banner/>
            <Titulo forNome="Livros em destaque:"/>
            <Carrosel list={itemCarrosel}/>
        </div>
    )

    
}


export default Home