import style from './Header.module.scss'
import MenuHamburguer from './headerComponents/MenuHamburguer';
import IconeDeNavegar from './headerComponents/IconeDeNavegar';
import ListaDoMenu from './headerComponents/ListaDoMenu';
import LogoPrincipal from './headerComponents/LogoPrincipal';
import Perfil from './headerComponents/Perfil';


const Header = () => {


    const listCategoria = [
        {nome: 'Programação', link: '/livro'},
        {nome: 'Front-end', link: '/livro'},
        {nome: 'Infraestrutura', link: '/Livrod'},
        {nome: 'Business', link: '/livro'},
        {nome: 'Design e UX', link: '/livro'},
    ]

    const listAutores = [
        {nome: 'Verônica Roth', link: '/livro'},
        {nome: 'Zibia Gasparetto', link: '/livro'},
        {nome: 'Marcelo Cézar', link: '/livro'},
        {nome: 'Dan Brown', link: '/livro'},
    ]

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
                    <ListaDoMenu list={listCategoria} listName='Categorias'/>  
                    <ListaDoMenu list={listAutores} listName='Autores Destque'/>   
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
