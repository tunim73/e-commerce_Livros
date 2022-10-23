import style from './Form.module.scss'


const Form = () => {


    return ( 
        < div className = { style.container } >
            <form className = { style.container }> 
                <label>E-mail:</label> 
                <input type = "text" name = "#" placeholder = 'E-mail' / >
                <label>Senha:</label>
                <input type = "password" name ="#" placeholder="senha" / >
            </form> 
        </div> 
        )
}

export default Form


/*






*/