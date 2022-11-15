import style from './ItemCatalogo.module.scss'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { livroPrincipal } from '../../atom/livroPrincipal/livroPrincipal.atom'

export const Card = ({item}) => {

    const setLivroPrincipal = useSetRecoilState(livroPrincipal);
    const navigate = useNavigate();

    const itemAoDetalhesDeLivro = () => {
        setLivroPrincipal(item);
        navigate('/livro/detalhes')
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


