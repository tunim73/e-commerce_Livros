export const listForFormCadastro = {
    nomeBotao:"Cadastrar",
    titulo: "Cadastra-se",
    list: 
    [
        {
            label:'nome',
            id:'nome',
            type: 'text',
            placeholder:'Digite seu nome',
        },
        {
            label:'email',
            id:'email',
            type: 'email',
            placeholder:'Digite seu email',
        },
        {
            label:'senha',
            id:'senha',
            type: 'password',
            placeholder:'Digite sua senha',
        },
        {
            label:'Confirme sua senha',
            id:'confrimaSenha',
            type: 'password',
            placeholder:'Confirme sua senha novamente',
        }
    ]
}

export const listForFormLogin = {
    
    nomeBotao:"Login",
    titulo: "Login",
    list: 
    [
        {
            label:'email',
            id:'email',
            type: 'text',
            placeholder:'Digite seu e-mail',
        },
        {
            label:'senha',
            id:'senha',
            type: 'password',
            placeholder:'Digite sua senha',
        }
    ]
}

export const listForPagCadastroCategoria = {
        titulo:"Cadastro de Categorias",
        nomeBotao:'Cadastrar',
        list: [
            {
                label:'Nome',
                id:'nome',
                type: 'text',
                placeholder:'Digite o nome do livro'
            },
            {
                label:'Categoria',
                id:'categoria',
                type: 'text',
                placeholder:'Insira as categorias do livro'
            },
            {
                label:'Foto do livro',
                id:'fotoLivro',
                type: 'file',
                placeholder:'Insira a imagem do livro'
            },
            {
                label:'Preço',
                id:'preco',
                type: 'text',
                placeholder:'Digite o preço'
            },
            {
                label:'Sinopse',
                id:'sinopse',
                type: 'text',
                placeholder:'Digite a sinopse do livro'
            },
            {
                label:'Autor',
                id:'autor',
                type: 'text',
                placeholder:'Digite o autor'
            },
            {
                label:'Edição',
                id:'edicao',
                type: 'text',
                placeholder:'Digite a edição'
            },
            {
                label:'Editora',
                id:'editora',
                type: 'text',
                placeholder:'Digite a editora'
            },
            {
                label:'Ano de lançamento',
                id:'preco',
                type: 'date',
                placeholder:'Digite o ano de lançamento do livro'
            },
        ]
}

export const listForPagCadastroAutor = {
    titulo:"Cadastro de Autores",
    nomeBotao:'Cadastrar',
    list: [
        {
            label:'Nome',
            id:'nome',
            type: 'text',
            placeholder:'Digite o nome do livro'
        },
        {
            label:'Autor',
            id:'autor',
            type: 'text',
            placeholder:'Digite o autor'
        },
        {
            label:'Edição',
            id:'edicao',
            type: 'text',
            placeholder:'Digite a edição'
        },
        {
            label:'Editora',
            id:'editora',
            type: 'text',
            placeholder:'Digite a editora'
        },
        {
            label:'Ano de lançamento',
            id:'preco',
            type: 'date',
            placeholder:'Digite o ano de lançamento do livro'
        },
    ]
}