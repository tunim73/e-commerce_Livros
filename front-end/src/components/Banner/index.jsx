import './Banner.scss'


const Banner = () => {

    return(
        <>
            <section className="banner">
                <h2 className="banner__texto">Encontre o livro do seu gosto!</h2>
                <input type="search" className="banner__pesquisa" placeholder="Qual será sua próxima leitura?"/>
            </section>
        </>
    )
}

export default Banner






