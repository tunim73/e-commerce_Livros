import MenuHamburguer from './headerComponents/MenuHamburguer';
import IconeDeNavegar from './headerComponents/IconeDeNavegar';
import ListaDoMenu from './headerComponents/ListaDoMenu';
import LogoPrincipal from './headerComponents/LogoPrincipal';
import Perfil from './headerComponents/Perfil';
import style from './Header.module.scss'


const Header = () => {

    const listIconesDeNavegar = [
        {
            nome:'Meu Carrinho',
            imagem: '/public/assets/imagens/carrinho.png',
            alt: "Carrinhos de compras",
            link:'/livro'
        },
        {
            nome:'Meu Perfil',
            imagem: '/public/assets/imagens/user.png',
            alt: "Meu Perfil",
            link:'/livro'
        }

    ]

    return (
        <>  
            <header className = {style.cabeçalho}>

                <div className={style.container}>
                    <MenuHamburguer/>
                    <LogoPrincipal/>
                </div>
                
                <div className={style.container}>
                    <ListaDoMenu />  
                </div>

                <div className={style.container}>
                    <IconeDeNavegar icon ={listIconesDeNavegar[0]}/>
                    <Perfil/>
                </div>
                
                
            </header>
        </>
    )
}


export default Header
