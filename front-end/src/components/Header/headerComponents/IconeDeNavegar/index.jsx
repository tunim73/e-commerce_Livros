import style from './IconeDeNavegar.module.scss'
import { NavLink } from 'react-router-dom';


const IconeDeNavegar = ({icon}) => {


    return(
        <>
            <NavLink className={style.container__link} to ={icon.link}>
                <img src={icon.imagem} alt={icon.alt} className={style.container__imagem} />
                <p className={style.container__texto}>
                    {icon.nome}
                </p>
            </NavLink>
        
        </>
        
    )


}

export default IconeDeNavegar;


/*
<div className={style.container}>           
                    
                    <a href="#" className={style.container__link}>
                        <img src="/public/assets/imagens/user.png" alt="Meu Perfil" className={style.container__imagem}/>
                        <p className={style.container__texto}>
                            Meu Perfil
                        </p>
                    </a>
        </div>
*/