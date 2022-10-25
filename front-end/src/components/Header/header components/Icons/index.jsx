import style from './Icons.module.scss'

const Icons = () => {


    return(

        <div className={style.container}>           
                    <a href="#">
                        <img src="/public/assets/imagens/favorito.png" alt="Meus favoritos" className={style.container__imagem_transparente}/>
                    </a>
                    <a href="#" className={style.container__link}>
                        <img src="/public/assets/imagens/carrinho.png" alt="Carrinhos de compras" className={style.container__imagem} />
                        <p className={style.container__texto}>
                            Minha sacola
                        </p>
                    </a>
                    <a href="#" className={style.container__link}>
                        <img src="/public/assets/imagens/user.png" alt="Meu Perfil" className={style.container__imagem}/>
                        <p className={style.container__texto}>
                            Meu Perfil
                        </p>
                    </a>
                </div>
    )


}

export default Icons;