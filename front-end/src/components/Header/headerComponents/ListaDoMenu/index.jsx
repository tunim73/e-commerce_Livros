import style from './ListaDoMenu.module.scss'
import { NavLink } from 'react-router-dom'

const ListaDoMenu = (props) =>{

    return (
        <>
            <ul className={style.opções}>
                <input type="checkbox" id={props.listName} className={style.opções__botao}/>
                    <label htmlFor={props.listName} className={style.opcões__rotulo}>
                        <li className={style.opções__item}>{props.listName}</li>
                    </label>
                <ul className={style.lista_menu}> 

                    {props.list.map(item => 
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
