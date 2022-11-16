import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'
import  Titulo  from '../Titulo'
/*import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BotaoError } from '../BotaoError';

const schema = yup.object({
    nome : yup.string().required('campo obrigatório'),
    age: yup.number().positive().integer().required('campo obrigatório'),
    email: yup.string().email().required('campo obrigatório'),
    senha: yup.string().min(6).max(10).required('campo obrigatório'),
    categoria: yup.string().required('campo obrigatório'),
    preco: yup.number().positive().integer().required('campo obrigatório'),
    biografia:yup.string().min(10).max(256).required('campo obrigatório'),
    sinopse: yup.string().min(10).max(256).required('campo obrigatório'),
    autor: yup.string().required('campo obrigatório'),
    edicao: yup.string().required('campo obrigatório'),
    editora: yup.string().required('campo obrigatório'),
  });*/

const Formulario = (props/*,{valido,invalido}*/) => {
  /*  const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });*/
      /*const isValido = () =>{
        let campo = document.getElementsByTagName(CampoTexto);
        if(campo===null){
            valido = false;
            invalido = true;
        }else{
            valido = true;
            invalido = false;
        }
      }*/

      const onSubmit = data => console.log(data);
    return ( 
            <form onSubmit={onSubmit()} className = {style.formulario}> 
                <Titulo forNome={props.titulo} />
                {props.list.map(item => 
                <CampoTexto /*register={register} onClick={isValido()}*/ key={`#${item.label}#${props.titulo}`} item={item} valido={valido} invalido={invalido}/>
                )/*{errors?.item.id?.type && <BotaoError/>}*/}
                <Botao botao = {props.nomeBotao}/>
            </form> 
        )
}

export default Formulario
