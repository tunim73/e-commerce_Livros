import { NavLink } from 'react-router-dom';
import style from './MenuHamburguer.module.scss'
import { listAutores, listCategoria } from '../../../../data/DataNavigation'


const MenuHamburguer = () => {


    return(

        
        <>
            <input type="checkbox" id="menu" className={style.container__botao}/>
                <label htmlFor='menu' className={style.container__rotulo}>
                    <span className={style.cabeçalho__menu_hamburguer} ></span>
                </label>
                            
                <ul className={style.lista_menu}>
                    <NavLink className={style.lista_menu__link} to="/catalogo">
                        <li className={style.lista_menu__item}>                        
                            <span className={style.lista_menu__link}>
                                Catalogo
                            </span>
                        </li>
                    </NavLink>
                    <hr />
                    <li className={style.lista_menu__titulo}>
                        Categorias
                    </li> 
                    {listCategoria.map(item => 
                    <NavLink className={style.lista_menu__link} 
                        key={`${item.nome}+${item.link}`}
                        to={item.link}>
                            <li className={style.lista_menu__item}>
                                <span className={style.lista_menu__link}>{item.nome}</span>
                            </li>
                        </NavLink>)
                    }
                    <hr />
                    <li className={style.lista_menu__titulo}>
                        Autores de Destaque
                    </li> 
                    {listAutores.map(item => 
                        <NavLink className={style.lista_menu__link} 
                            key={`${item.nome}+${item.id}`} 
                            to={item.link}
                        >
                            <li className={style.lista_menu__item}>
                                <span className={style.lista_menu__link}>{item.nome}</span>
                            </li>
                        </NavLink>
                    ) }
                    
                </ul>
        
        
        </>
            

            
                        
        
    )


}

export default MenuHamburguer;