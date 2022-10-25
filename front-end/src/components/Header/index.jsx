import style from './Header.module.scss'
import MenuTexto from './header components/MenuTexto';





const Header = () => {

    //1° div menu hamburguer + logo
    //2° div menu "CATEGORIAS"
    //3° div icones laterais

    //Linha 70 - NavLink, funciona como a tag "a" do html, siga o padrão e
    //conseguirá viajar entre as páginas

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

                <MenuTexto/>
                
                <div className={style.container}>           
                    <a href="#">
                        <img src="/public/assets/imagens/favorito.png" alt="Meus favoritos" className={style.container__imagem_transparente}/>
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