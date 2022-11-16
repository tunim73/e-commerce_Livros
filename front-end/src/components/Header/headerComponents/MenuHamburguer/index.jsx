import { NavLink } from 'react-router-dom';
import style from './MenuHamburguer.module.scss'



const MenuHamburguer = () => {


    return(

        
        <>
            <input type="checkbox" id="menu" className={style.container__botao}/>
                <label htmlFor='menu' className={style.container__rotulo}>
                    <span className={style.cabeçalho__menu_hamburguer} ></span>
                </label>
                            
                <ul className={style.lista_menu}>
                    <li className={style.lista_menu__titulo}>
                        Categorias
                    </li> 
                    <NavLink className={style.lista_menu__link} to="/">
                        <li className={style.lista_menu__item}>
                            <span className={style.lista_menu__link}>Home</span>
                        </li>
                    </NavLink>
                    <NavLink className={style.lista_menu__link} to="/catalogo">
                        <li className={style.lista_menu__item}>                        
                            <span className={style.lista_menu__link}>
                                Catalogo
                            </span>
                        </li>
                    </NavLink>
                    <NavLink className={style.lista_menu__link} to="/">
                        <li className={style.lista_menu__item}>
                            <span className={style.lista_menu__link}>
                                Autores de Destaque
                            </span>
                        </li>
                    </NavLink>
                </ul>
        
        
        </>
            

            
                        
        
    )


}

export default MenuHamburguer;