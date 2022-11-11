import style from './ListaDoMenu.module.scss'
import { NavLink } from 'react-router-dom'
import { listAutores, listCategoria } from '../../../../data/DataNavigation'


const ListaDoMenu = () =>{

    return (
        <>
            <ul className={style.opções}>
                <label  htmlFor="listCategoria" className={style.opcões__rotulo}>
                    <li className={style.opções__item}>Categoria</li>
                </label>

                <ul className={style.lista_menu}> 
                    {listCategoria.map(item => 
                        <li className={style.lista_menu__item} key = {item.nome}>
                            <NavLink className={style.lista_menu__link} to= {item.link}>{item.nome}</NavLink>
                        </li>
                    )}
                </ul>
            </ul>

            <ul className={style.opções}>

                <label htmlFor='listAutores' className={style.opcões__rotulo}>
                    <li className={style.opções__item}>Autores Destaque</li>
                </label>

                <ul className={style.lista_menu}> 
                    {listAutores.map(item => 
                        <li className={style.lista_menu__item} key = {item.nome}>
                            <NavLink className={style.lista_menu__link} to= {item.link}>{item.nome}</NavLink>
                        </li>
                    )}
                </ul>
            </ul>
        </>
    )


}

export default ListaDoMenu
