import style from './Perfil.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalLogin from '../../../ModalLogin'


const Perfil = () =>{


    const [logado, setLogado] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);


    const aoAbrirModal = () => setModalAberto(true);
    

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
                            <label type ='text'className={style.perfil__opções__link}
                            onClick={aoAbrirModal}
                            >Entre</label>

                            <ModalLogin 
                            aberto= {modalAberto}
                            aoFechar={() => setModalAberto(false)}
                            />

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