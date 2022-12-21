import style from './ItensHistorico.module.scss'



export const ItensHistorico = ({ item }) => {

    return (
        <div className={style.container}>
            <h2 className={style.Stitulo}>Nome do Livro: {item.livro_id.nome}</h2>
            <p className={style.Stexto50}>Preço: {item.livro_id.preco}</p>
            <p className={style.Stexto50}>qtd: {item.qtd}</p>
            <hr />
        </div>
    )
}

