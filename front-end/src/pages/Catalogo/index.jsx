import style from './Catalogo.module.scss'
import { Card } from '../../components/ItemCatalogo'
import Titulo from '../../components/Titulo'
import { useRecoilValue } from 'recoil'
import {listLivros } from '../../atom/livro/livro.selectors'

const Catalogo = () => {

    const listaCarrosel = useRecoilValue(listLivros);

    return ( 
    <>
        <div className={style.container}>
            <Titulo forNome = "Catalogo"/>
            {listaCarrosel.map(item => <Card key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>)}
        </div>
    </>
    )
}


export default Catalogo