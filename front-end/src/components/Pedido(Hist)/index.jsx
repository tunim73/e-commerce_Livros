import style from './Pedido.module.scss'
import { ItensHistorico } from './ItensHistorico/ItensHistorico'



const Pedido = (props) => {

    
    return (
        <div className={style.container}>

            <h2 className={style.Stitulo}>Pedido: {props.forId}</h2>
            <p className={style.Stexto50}>Data: {props.forDate}</p>
            <p className={style.Stexto50}>Final do cartão: {props.forPagamento}</p>
            <p className={style.Stexto100}>{props.forEnd}</p>
            {props.forList.map(e => <ItensHistorico item={e} />)}

            
            <p className={style.Stexto33}></p>
            <p className={style.Stexto33}></p>
            <p className={style.Stexto33}>Total: R${props.forTotal}</p>


            <hr />
        </div>
    )
}
export default Pedido
/*{props.list.map(element => <ItensHistorico item = {element}/> )}*/