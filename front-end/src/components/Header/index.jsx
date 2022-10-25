import style from './Header.module.scss'
import MenuTexto from './header components/MenuTexto';
import MenuHamburguer from './header components/MenuHamburguer';
import Icons from './header components/Icons';





const Header = () => {

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