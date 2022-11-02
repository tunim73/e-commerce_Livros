import style from './Titulo.module.scss'


const Titulo = (props) => {


    return ( 
        <div className = { style.container }>
                <div >
                        <h1 className={style.titulo}>{props.forNome}</h1>
                </div>
                
        </div> 
        )
}
export default Titulo