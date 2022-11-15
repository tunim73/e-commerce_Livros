import style from './ItemCatalogo.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Card = ({item}) => {

    const [livroPrincipal, setLivroPrincipal] = useState([])





    const itemAoDetalhesDeLivro = () => {

        setLivroPrincipal([...livroPrincipal, item]);
        
        /*
            Pegar infos do item atual
            e passar para 
        */
       //useNavigate

    }


    return ( 
        <div className={style.container}>
            <hr/>
            <div className={style.grid1}>
                <img className={style.img} src={item.imagem} />
            </div>
            <div className={style.grid2}>
                <h1 className={style.info}>{item.nome}</h1>
                <h1 className={style.info}>Preço : R${item.preco}</h1>
                <div className={style.Botao} >
                    <input className={style.detalhes} type="button" value = "Detalhes" 
                    onClick ={itemAoDetalhesDeLivro} />
                </div>
                  
  
            </div>
            
        </div>
        )
}


