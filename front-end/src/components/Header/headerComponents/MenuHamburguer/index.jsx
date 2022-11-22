import { NavLink, useNavigate } from 'react-router-dom';
import style from './MenuHamburguer.module.scss'
import { listCategoria } from '../../../../data/DataNavigation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { autorDestaquePag, listAutores} from '../../../../atom/autor/autor.selectors'

const MenuHamburguer = () => {

    const navigate = useNavigate();
    const _listAutores = useRecoilValue(listAutores);
    const AutorDestaque = useSetRecoilState(autorDestaquePag);


    return(

        
        <>
            <input type="checkbox" id="menu" className={style.container__botao}/>
                <label htmlFor='menu' className={style.container__rotulo}>
                    <span className={style.cabeçalho__menu_hamburguer} ></span>
                </label>
                            
                <ul className={style.lista_menu}>
                    <NavLink className={style.lista_menu__link} to="/catalogo">
                        <li className={style.lista_menu__item}>                        
                            <span className={style.lista_menu__link}>
                                Catalogo
                            </span>
                        </li>
                    </NavLink>
                    <hr />
                    <li className={style.lista_menu__titulo}>
                        Categorias
                    </li> 
                    {listCategoria.map(item => 
                    <NavLink className={style.lista_menu__link} 
                        key={`${item.nome}+${item.link}`}
                        to={item.link}>
                            <li className={style.lista_menu__item}>
                                <span className={style.lista_menu__link}>{item.nome}</span>
                            </li>
                        </NavLink>)
                    }
                    <hr />
                    <li className={style.lista_menu__titulo}>
                        Autores de Destaque
                    </li> 
                    {_listAutores.map(item => 
                        <div className={style.lista_menu__link} 
                            key={`${item.nome}+${item.id}`} 
                            onClick={()=>{
                                AutorDestaque(item);
                                window.scrollTo(0, 0);
                                navigate('/autor/detalhes')
                            }}
                        >
                            <li className={style.lista_menu__item}>
                                <span className={style.lista_menu__link}>{item.nome}</span>
                            </li>
                        </div>
                    ) }
                    
                </ul>
        
        
        </>
            

            
                        
        
    )


}

export default MenuHamburguer;