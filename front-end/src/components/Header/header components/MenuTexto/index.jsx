import style from './MenuTexto.module.scss'
import { NavLink } from "react-router-dom";


const MenuTexto = () => {


    return(

        <div className={style.container}>
                    <ul className={style.opções}>
                        <input type="checkbox" id="opcões_menu" className={style.opções__botao}/>
                        <label htmlFor="opcões_menu" className={style.opcões__rotulo}>
                            <li className={style.opções__item}>Categorias</li>
                        </label>
                        <ul className={style.lista_menu}>     
                            <li className={style.lista_menu__item}>
                                <NavLink className={style.lista_menu__link}
                                to='/Livro' >Programação</NavLink>
                                
                            </li>
                            <li className={style.lista_menu__item}>
                                <a href="#" className={style.lista_menu__link}>
                                    Front_End
                                </a>
                            </li>
                            <li className={style.lista_menu__item}>
                                <a href="#" className={style.lista_menu__link}>
                                    Infraestrutura
                                </a>
                            </li>
                            <li className={style.lista_menu__item}>
                                <a href="#" className={style.lista_menu__link}>
                                    Business
                                </a>
                            </li>
                            <li className={style.lista_menu__item}>
                                <a href="#" className={style.lista_menu__link}>
                                    Design e UX
                                </a>
                            </li>
                        </ul>

                        <li className={style.opções__item}>
                        <a href="#" className={style.opções__link}>
                            Favoritos
                        </a>
                    </li>
                </ul>
                </div>
    )


}

export default MenuTexto;