import style from './IconeDeNavegar.module.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { usuarioLogado } from '../../../../atom/usuario/Login/loginselected';
import { useRecoilValue } from 'recoil';


const IconeDeNavegar = () => {


    const usuario = useRecoilValue(usuarioLogado);
    const navigate = useNavigate();
    
    const icon = {
        nome:'Meu Carrinho',
        imagem: '/public/assets/imagens/carrinho.png',
        alt: "Carrinhos de compras",
        link:'/carrinho'
    }


    const aoClickCarrinho = () => {
        if(usuario===true){
            navigate('/carrinho')
        }
        else {
            alert("Necessário fazer Login para continuar !");
        }

    }



    

    return(
    
            <div className={style.container__link} onClick={aoClickCarrinho} >
                <img src={icon.imagem} alt={icon.alt} className={style.container__imagem} />
                    <p className={style.container__texto}>
                        {icon.nome}
                    </p>
            </div>
        
        
        
    )


}

export default IconeDeNavegar;

