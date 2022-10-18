
import style from './Header.module.scss'


const Header = () => {


    return (
        <>  
            <header className = {style.cabeçalho}>

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

                <div className={style.container}>
                    <ul className={style.opções}>
                        <input type="checkbox" id="opcões_menu" className={style.opções__botao}/>
                        <label htmlFor="opcões_menu" className={style.opcões__rotulo}>
                            <li className={style.opções__item}>Categorias</li>
                        </label>
                        <ul className={style.lista_menu}>     
                            <li className={style.lista_menu__item}>
                                <a href="#" className={style.lista_menu__link}>
                                    Programação
                                </a>
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
                
                <div className={style.container}>           
                    <a href="#">
                        <img src="/public/assets/imagens/favorito.png" alt="Meus favoritos" className={style.container__imagem}/>
                    </a>
                    <a href="#" className={style.container__link}>
                        <img src="/public/assets/imagens/carrinho.png" alt="Carrinhos de compras" className={style.container__imagem} />
                        <p className={style.container__texto}>
                            Minha sacola
                        </p>
                    </a>
                    <a href="#" className={style.container__link}>
                        <img src="/public/assets/imagens/user.png" alt="Meu Perfil" className={style.container__imagem}/>
                        <p className={style.container__texto}>
                            Meu Perfil
                        </p>
                    </a>
                </div>

            </header>
        </>
    )
}


export default Header






 /*
 





            
 
 */