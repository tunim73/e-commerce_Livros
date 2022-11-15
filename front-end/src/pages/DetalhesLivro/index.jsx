import style from './DetalhesLivro.module.scss'
import Titulo from '../../components/Titulo'
import Sinopse from '../../components/Sinopse'
import {Botao} from '../../components/Botao'
import { Carrosel } from '../../components/Carrosel';
import { NavLink } from 'react-router-dom';

const DetalhesLivro = (item) => {
     
    return ( 
    <>        
        <Titulo forNome = {item.nome}/>
        
        <div className={style.wrap}>
            <img className={style.img} src={item.imagem} />
            <h1 className={style.preco}>Preço : R${item.preco}</h1>
            <NavLink to="../carrinho">            
                <Botao className ={style.botao} botao="Adicionar ao carrinho"/>
            </NavLink>
            <Sinopse forNome = "Sinopse" forResumo = {item.sinopse}/>
            <Titulo forNome = "Outros Livros"/>
                 
        </div>
        <Carrosel/>
          
        
         
        
    </>
    )


}


export default DetalhesLivro