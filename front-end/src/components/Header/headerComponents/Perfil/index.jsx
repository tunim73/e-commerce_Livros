import style from './Perfil.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Perfil = () =>{


    const [logado, setLogado] = useState(false);


    return (
        
            <div className={style.perfil}>
                <input type="checkbox" id='perfil' className={style.perfil__input}/>
                <label htmlFor='perfil'className={style.perfil__rotulo}>     
                    <img src="/assets/imagens/user.png" alt="Meu Perfil" className={style.perfil__imagem}/>
                        <p className={style.perfil__texto}>
                            Meu Perfil
                        </p>

                </label>
                <ul className={style.perfil__opções}> 
                
                { (logado === false) ? 
                    <>
                        <li className={style.perfil__opções__item}>
                        <NavLink className={style.perfil__opções__link} to= '/livro'>Entrar</NavLink>
                        </li>
                        <li className={style.perfil__opções__item}>
                        <NavLink className={style.perfil__opções__link} to= '/livro'>Cadastre-se</NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li className={style.perfil__opções__item}>
                            <NavLink className={style.perfil__opções__link} to= '/livro'>Meus Pedidos</NavLink>
                        </li>
                        <li className={style.perfil__opções__item}>
                            <NavLink className={style.perfil__opções__link} to= '/livro'>Minhas configurações</NavLink>
                        </li>
                    </>
                }
                
                </ul>
            </div>
        
    )


}

export default Perfil