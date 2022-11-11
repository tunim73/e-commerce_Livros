import style from './Perfil.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalLogin from '../../../ModalLogin'
import { listForFormLogin, listForFormCadastro } from '../../../../data/forForms'


const Perfil = () =>{   


    const [logado, setLogado] = useState(false);
    const [modalLoginAberto, setModalLoginAberto] = useState(false);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);

    const aoAbrirModalLogin = () => {
        setModalCadastroAberto(false);
        setModalLoginAberto(true);
    }


    const aoAbrirModalCadastro = () => {
        setModalLoginAberto(false);
        setModalCadastroAberto(true);
    }


    
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
                            onClick={aoAbrirModalLogin}
                            >Entre</label>

                            <ModalLogin 
                            aberto= {modalLoginAberto}
                            aoFechar={() => setModalLoginAberto(false)}
                            forForm={listForFormLogin}
                            />

                        </li>

                        <li className={style.perfil__opções__item}>
                            <label type ='text'className={style.perfil__opções__link}
                                onClick={aoAbrirModalCadastro}
                                >Cadastre-se</label>
                            <ModalLogin 
                                aberto= {modalCadastroAberto}
                                aoFechar={() => setModalCadastroAberto(false)}
                                forForm={listForFormCadastro}
                            />

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