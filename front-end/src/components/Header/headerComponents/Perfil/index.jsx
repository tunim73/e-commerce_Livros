import style from './Perfil.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalLogin from '../../../ModalLogin'
import { listForFormLogin, listForFormCadastro } from '../../../../data/forForms'
import { usuarioLogado } from '../../../../atom/usuario/Login/loginselected'
import { useRecoilState } from 'recoil'

const Perfil = () =>{   

    const [logado, setLogado] = useRecoilState(usuarioLogado);
    
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

    const aoSubmitLogin = (data) => {
        console.log("Data em perfil Login: ", data);
        setLogado(data);
    }

    const aoSubmitCadastro = (data) => {
        console.log("Data em perfil Cadastro: ", data);
        setModalCadastroAberto(false);
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
                            aoSubmit={aoSubmitLogin}
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
                                aoSubmit={aoSubmitCadastro}
                            />

                        </li>

                    </>
                    :
                    <>
                        <li className={style.perfil__opções__item}>
                            <NavLink className={style.perfil__opções__link} to= '/livro'>Cadastrar Livros</NavLink>
                        </li>   
                        <li className={style.perfil__opções__item}>
                            <NavLink className={style.perfil__opções__link} to= '/autor'>Cadastrar Autores</NavLink>
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