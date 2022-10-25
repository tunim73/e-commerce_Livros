import style from './Header.module.scss'
import MenuTexto from './header components/MenuTexto';
import MenuHamburguer from './header components/MenuHamburguer';





const Header = () => {

    //1° div menu hamburguer + logo
    //2° div menu "CATEGORIAS"
    //3° div icones laterais

    //Linha 70 - NavLink, funciona como a tag "a" do html, siga o padrão e
    //conseguirá viajar entre as páginas

    return (
        <>  
            <header className = {style.cabeçalho}>
                
                <MenuHamburguer/>
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