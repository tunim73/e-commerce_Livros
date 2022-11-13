import style from './ItemCatalogo.module.scss'
import { NavLink } from 'react-router-dom'

export const Card = ({item}) => {

    return ( 
        <div className={style.container}>
        
            <div className={style.grid1}>
                <img className={style.img} src='https://www.carochinhaeditora.com.br/wp-content/uploads/2021/01/Ah-nao_E01_CAPA-V1.png' />
            </div>
            <div className={style.grid2}>
                <h1 className={style.info}>Nome do Livro</h1>
                <h1 className={style.info}>Preço : R$20,00</h1>
            <NavLink to='../../detalhesLivro'>
                <div className={style.Botao} >
                    <input className={style.detalhes} type="button" value = "Detalhes" />
                </div>
            </NavLink>    
  
            </div>
            
        </div>
        )
}


