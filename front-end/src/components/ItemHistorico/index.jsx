import style from './ItemHistorico.module.scss'


const ItemHistorico = (props , item) => {


    return ( 
        <div className = { style.container }>
            <hr/>
                <div className={style.grid1}>
                    <img className={style.img} src={props.imagem} />
                </div>
                
                <div className={style.grid2}>
                    <h1 className={style.info}>{props.nome}</h1>
                    <h1 className={style.info}>Preço : R${props.preco}</h1>
                    <h1 className={style.info}>Qtd: {props.qtd}</h1>
                </div> 
        </div>
        
        )
}
export default ItemHistorico