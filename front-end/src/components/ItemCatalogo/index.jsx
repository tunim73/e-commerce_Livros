import style from './ItemCatalogo.module.scss'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { listLivros } from '../../atom/livro/livro.selectors'

export const Card = ({item}) => {

    const setLivroDestaque = useSetRecoilState(listLivros);
    const navigate = useNavigate();

    const itemAoDetalhesDeLivro = () => {
        setLivroDestaque(item);
        window.scrollTo(0, 0);
        navigate('/livro/detalhes');
    }


    return ( 
        <div className={style.container}>
            <hr/>
            <div className={style.grid1} >
                <img className={style.img} src={item.imagem} onClick ={itemAoDetalhesDeLivro} />
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


