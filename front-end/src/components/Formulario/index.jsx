import style from './Form.module.scss'
import {CampoTexto} from '../CampoTexto'
import { Botao } from '../Botao'
import  Titulo  from '../Titulo'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const Formulario = (props) => {
  const { register,handleSubmit, watch, formState: { errors }, } = useForm({
    resolver: yupResolver(props.schema)
  });

    console.log(errors)
    return ( 
            <form onSubmit={handleSubmit(props.aoSubmit)} className = {style.formulario}> 
                <Titulo forNome={props.titulo} />
                {props.list.map(item => 
                  
                  <CampoTexto  key={`#${item.label}#${props.titulo}`} 
                  item={item} 
                  register={register}
                  errors={errors}
                  />
                )}
                <Botao botao = {props.nomeBotao}/>
            </form> 
        )
}

export default Formulario
