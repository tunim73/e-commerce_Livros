import style from './ItemCatalogo.module.scss'
import { NavLink } from 'react-router-dom'

export const Card = ({item}) => {

    return ( 
        <div className={style.container}>
            <hr/>
            <div className={style.grid1}>
                <img className={style.img} src={item.imagem} />
            </div>
            <div className={style.grid2}>
                <h1 className={style.info}>{item.nome}</h1>
                <h1 className={style.info}>Preço : R${item.preco}</h1>
            <NavLink to='../../detalhesLivro'>
                <div className={style.Botao} >
                    <input className={style.detalhes} type="button" value = "Detalhes" />
                </div>
            </NavLink>    
  
            </div>
            
        </div>
        )
}


