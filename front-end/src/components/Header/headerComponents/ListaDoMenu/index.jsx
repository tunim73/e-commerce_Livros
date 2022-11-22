import style from './ListaDoMenu.module.scss'
import { useNavigate } from 'react-router-dom'
import { listCategoria } from '../../../../data/DataNavigation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { autorDestaquePag, listAutores} from '../../../../atom/autor/autor.selectors'

const ListaDoMenu = () =>{
    
    const navigate = useNavigate();
    const _listAutores = useRecoilValue(listAutores);
    const AutorDestaque = useSetRecoilState(autorDestaquePag);


    return (
        <>
            <ul className={style.opções} onClick={()=>navigate('/catalogo')}>
                <label  htmlFor="listCategoria" className={style.opcões__rotulo}>
                    <li className={style.opções__item}>Catalogo</li>
                </label>
            </ul>
            <ul className={style.opções}>
                <label  htmlFor="listCategoria" className={style.opcões__rotulo}>
                    <li className={style.opções__item}>Categoria</li>
                </label>

                <ul className={style.lista_menu}> 
                    {listCategoria.map(item => 
                        <li className={style.lista_menu__item} key = {`${item.id}+${item.nome}`}>
                            <div className={style.lista_menu__link} 
                            onClick={(event =>{
                                navigate('/catalogo')
                            })}
                            >{item.nome}
                            </div>
                        </li>
                    )}
                </ul>
            </ul>

            <ul className={style.opções}>

                <label htmlFor='listAutores' className={style.opcões__rotulo}>
                    <li className={style.opções__item}>Autores Destaque</li>
                </label>

                <ul className={style.lista_menu}> 
                    {_listAutores.map(item => 
                        <li className={style.lista_menu__item} key = {`${item.id}+${item.nome}`}>
                            <div className={style.lista_menu__link}
                            onClick={(event =>{
                                AutorDestaque(item);
                                navigate('/autor/detalhes')
                            })}
                            >{item.nome}
                            
                            </div>
                        </li>
                    )}
                </ul>
            </ul>
        </>
    )


}

export default ListaDoMenu
