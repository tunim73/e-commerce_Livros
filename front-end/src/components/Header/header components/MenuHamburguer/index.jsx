import style from './MenuHamburguer.module.scss'
import { NavLink } from "react-router-dom";


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

                        <img src="/public/assets/imagens/logo.png" alt="Logo da Crônicas e Papel" className={style.container__imagem}/>
                        <h1 className={style.container__titulo}>
                            <b className={style.container__titulo_negrito }>Crônicas&</b>Papel
                        </h1>
                        
        </div>
    )


}

export default MenuHamburguer;