import style from './Catalogo.module.scss'
import {Card} from '../../components/ItemCatalogo'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
//import Vitrine from '../../components/VitrineDeLivros'

const Catalogo = () => {
    return ( 
    <>
    <div className={style.container}>
        <Titulo forNome = "Catalogo"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
        
    </>
    )
}


export default Catalogo