import style from './DetalhesLivro.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import { Botao } from '../../components/Botao'
import { Carrosel } from '../../components/Carrosel';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { livroPrincipal } from '../../atom/livroPrincipal/livroPrincipal.atom';
import { addItemCarrinho } from '../../atom/carrinho/carrinho.selectors';
import { useNavigate } from 'react-router-dom';


const DetalhesLivro = (item) => {
     
    const item = useRecoilValue(livroPrincipal);
    const setItensCarrinho = useSetRecoilState(addItemCarrinho);

    const navigate = useNavigate();
    

    const addAoCarrinho = () => {
        setItensCarrinho(item);
        alert(`O Livro "${item.nome}" foi adicionado ao carrinho`);
        //navigate('/carrinho');
    };

    return ( 
    <>        
        <Titulo forNome = {item.nome}/>
        
        <div className={style.wrap}>
            <img className={style.img} src={item.imagem} />
            <h1 className={style.preco}>Preço : R${item.preco}</h1>             
            <Botao className ={style.botao} botao="Adicionar ao carrinho" click ={addAoCarrinho} />
            <Sinopse forNome = "Sinopse" forResumo = {item.sinopse}/>
            <Titulo forNome = "Outros Livros"/>
                 
        </div>
        <Carrosel/>
    </>
    )


}


export default DetalhesLivro