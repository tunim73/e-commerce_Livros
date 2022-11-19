import style from './PagCadastros.module.scss'
import Formulario from '../../components/Formulario';
import { useApiAutor } from '../../hooks/useApiAutor';
import { useApiLivro } from '../../hooks/useApiLivro'

const PagCadastros = ({infos}) => {

    const apiAutor = useApiAutor();
    const apiLivro = useApiLivro();

    const aoSubmit = (data) => {

        if(infos.referencia === "forAutor"){
            const newAutor = apiAutor.novoAutor(data)
            if(newAutor){
                alert("Autor cadastrado com sucesso");
            }
            else{
                console.log("deu ruim em autor")
            }
        } else if(infos.referencia === "forLivro"){
            const newLivro = apiLivro.novoLivro(data)
            if(newLivro){
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