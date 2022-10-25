import style from './Header.module.scss'
import MenuTexto from './header components/MenuTexto';
import MenuHamburguer from './header components/MenuHamburguer';
import Icons from './header components/Icons';





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
                <Icons/>
                

            </header>
        </>
    )
}


export default Header






 /*
 





            
 
 */