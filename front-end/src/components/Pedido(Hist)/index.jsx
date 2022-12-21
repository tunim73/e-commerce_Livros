import style from './Pedido.module.scss'
import Item from '../ItemHistorico'
const Pedido = (props, { list }) => {


    return (
        <div className={style.container}>

            <h2 className={style.Stitulo}>Pedido: {props.forId}</h2>
            <p className={style.Stexto50}>Data: {props.forDate}</p>
            <p className={style.Stexto50}>Dados de Pag: {props.forPagamento}</p>
            <p className={style.Stexto100}>Endereço: {props.forEnd}</p>
            <Item imagem="public\assets\imagens\sqlLeigos.png" nome="20 mil leguas" preco="20,00" qtd="20" />
            <p className={style.Stexto33}></p>
            <p className={style.Stexto33}></p>
            <p className={style.Stexto33}>Total: R${props.forTotal}</p>


            <hr />
        </div>
    )
}
export default Pedido

//{list.map(item =><Item key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>)}