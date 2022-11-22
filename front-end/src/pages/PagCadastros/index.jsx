import style from './PagCadastros.module.scss'
import Formulario from '../../components/Formulario';
import { useApiAutor } from '../../hooks/useApiAutor';
import { useApiLivro } from '../../hooks/useApiLivro'
import { useSetRecoilState } from 'recoil';
import { listAutores } from '../../atom/autor/autor.selectors';
import { listLivros } from '../../atom/livro/livro.selectors';

const PagCadastros = ({infos}) => {

    const apiAutor = useApiAutor();
    const atualizarAutores = useSetRecoilState(listAutores);
    
    const apiLivro = useApiLivro();
    const atualizarLivros = useSetRecoilState(listLivros)

    const aoSubmit = async (data) => {

        if(infos.referencia === "forAutor"){
            const newAutor = await apiAutor.novoAutor(data)
            if(newAutor){
                atualizarAutores(newAutor);
                alert("Autor cadastrado com sucesso");
            }
            else{
                console.log("deu ruim em autor")
            }
        } else if (infos.referencia === "forLivro"){
            const newLivro = await apiLivro.novoLivro(data)
            if(newLivro){
                atualizarLivros(newLivro);
                alert("Livro cadastrado com sucesso");
            }
            else{
                console.log("deu ruim em livro")
            }
        }
    }




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


export default PagCadastros