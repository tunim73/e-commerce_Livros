import style from './MenuHamburguer.module.scss'
import { NavLink } from "react-router-dom";
import LogoPrincipal from '../LogoPrincipal';


const MenuHamburguer = () => {


    return(

        <div className= {style.container}>
        
            <input type="checkbox" id="menu" className={style.container__botao}/>
            <label htmlFor='menu' className={style.container__rotulo}>
                <span className={style.cabeçalho__menu_hamburguer} ></span>
            </label>
                        
            <ul className={style.lista_menu}>
                <li className={style.lista_menu__titulo}>
                    Categorias
                </li>
                <li className={style.lista_menu__item}>
                    <a href="#" className={style.lista_menu__link}>
                        Entrar/Cadastra-se
                    </a>
                </li>
                <li className={style.lista_menu__item}>
                    <a href="#" className={style.lista_menu__link}>
                        Home
                    </a>
                </li>
                <li className={style.lista_menu__item}>                        
                    <a href="#" className={style.lista_menu__link}>
                        Categorias
                    </a>
                </li>
                <li className={style.lista_menu__item}>
                    <a href="#" className={style.lista_menu__link}>
                        Autores de Destaque
                    </a>
                </li>
                <li className={style.lista_menu__item}>
                    <a href="#" className={style.lista_menu__link}>
                        Carrinho de compras
                    </a>
                </li>
            </ul>

            <LogoPrincipal/>
                        
        </div>
    )


}

export default MenuHamburguer;