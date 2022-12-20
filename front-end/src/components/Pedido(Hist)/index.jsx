import style from './Pedido.module.scss'
import Item from '../ItemHistorico'
const Pedido = (props, { list }) => {


    return (
        <div className={style.container}>

            <h2 className={style.Stitulo}>Pedido: {props.forId}</h2>
            <Item imagem="public\assets\imagens\sqlLeigos.png" nome="20 mil leguas" preco="20,00" qtd="20" />
            <p className={style.Stexto}>Data: {props.forDate}</p>
            <p className={style.Stexto}>Total: R${props.forTotal}</p>
            <hr/>
        </div>
    )
}
export default Pedido

//{list.map(item =><Item key={`${item.id}+${item.nome}+${item.edicao}`} item={item}/>)}