import { useNavigate } from 'react-router-dom';
import style from './PagCadastros.module.scss'
import Formulario from '../../components/Formulario';
import { useApiAutor } from '../../hooks/useApiAutor';
import { useApiLivro } from '../../hooks/useApiLivro'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listAutores } from '../../atom/autor/autor.selectors';
import { listLivros } from '../../atom/livro/livro.selectors';
import { usuarioLogado } from '../../atom/usuario/Login/loginselected';

const PagCadastros = ({infos}) => {

    const apiAutor = useApiAutor();
    const apiLivro = useApiLivro();
    const navigate = useNavigate();
    const logado = useRecoilValue(usuarioLogado);
    const atualizarAutores = useSetRecoilState(listAutores);
    const atualizarLivros = useSetRecoilState(listLivros)

    const aoSubmit = async (data) => {

        if(infos.referencia === "forAutor"){
            const newAutor = await apiAutor.novoAutor(data)
            if(newAutor){
                //atualizarAutores(newAutor.newAutor);
                alert("Autor cadastrado com sucesso");
                navigate('/');
            }
            else{
                alert("Deu probelma !");
            }
        } else if (infos.referencia === "forLivro"){
            const newLivro = await apiLivro.novoLivro(data)
            if(newLivro.status===true){
                atualizarLivros(newLivro.livro);
                alert("Livro cadastrado com sucesso");
                navigate('/');
            }
            else{
                alert("Deu probelma !");
            }
        }
    }


    if(logado === true) {
        return ( 
        
            <div className={style.container}>
                <div className={style.container_forForm}>
                    <Formulario titulo = {infos.titulo} 
                    list={infos.list}
                    nomeBotao={infos.nomeBotao}
                    schema={infos.schema}
                    aoSubmit={aoSubmit}
                    />
                </div>
            </div>
        )
    }
    else {
        return(
        <>
            <h1>Não autorizado</h1>
        </>)
    }

    


}


export default PagCadastros