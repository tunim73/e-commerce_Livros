import style from './ModalBase.module.scss'


export const ModalBase = ({titulo, aberto, aoFechar, children}) => {

    return(
        
        (aberto) ? 
        <>
            <div className={style.fundo}  onClick= {aoFechar}/>
            <div className={style.modal_janela}>
                <div className={style.modal_containerTitulo}>
                    {/*<h2 className={style.modal_titulo}>{titulo}</h2>*/}
                    <button className={style.modal_btnFechar} onClick= {aoFechar}>X</button>
                </div>
                {children}
            </div>
        </>
        :
        <></>
    )

}