import style from './Sinopse.module.scss'


const Sinopse = (props) => {


    return ( 
        <div className = { style.container }>
            <h2 className = {style.Stitulo}>{props.forNome}</h2>
            <p className = {style.Stexto}>{props.forResumo}</p>       
        </div> 
        )
}
export default Sinopse