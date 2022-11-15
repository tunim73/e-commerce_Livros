export const listForFormCadastro = {
    nomeBotao: "Cadastrar",
    titulo: "Cadastra-se",
    list: [{
            label: 'nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite seu nome',
            required: false
        },
        {
            label: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'Digite seu email',
            required: false
        },
        {
            label: 'senha',
            id: 'senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: false
        },
        {
            label: 'Confirme sua senha',
            id: 'confrimaSenha',
            type: 'password',
            placeholder: 'Confirme sua senha novamente',
            required: false
        }
    ]
}

export const listForFormLogin = {

    nomeBotao: "Login",
    titulo: "Login",
    list: [{
            label: 'email',
            id: 'email',
            type: 'text',
            placeholder: 'Digite seu e-mail',
            required: false
        },
        {
            label: 'senha',
            id: 'senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: false

        }
    ]
}

export const listForPagCadastroCategoria = {
    titulo: "Cadastro de Categorias",
    nomeBotao: 'Cadastrar',
    list: [{
            label: 'Nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite o nome do livro'

        },
        {
            label: 'Categoria',
            id: 'categoria',
            type: 'text',
            placeholder: 'Insira as categorias do livro'
        },
        {
            label: 'Foto do livro',
            id: 'fotoLivro',
            type: 'file',
            placeholder: 'Insira a imagem do livro'
        },
        {
            label: 'Preço',
            id: 'preco',
            type: 'text',
            placeholder: 'Digite o preço'
        },
        {
            label: 'Sinopse',
            id: 'sinopse',
            type: 'text',
            placeholder: 'Digite a sinopse do livro'
        },
        {
            label: 'Autor',
            id: 'autor',
            type: 'text',
            placeholder: 'Digite o autor'
        },
        {
            label: 'Edição',
            id: 'edicao',
            type: 'text',
            placeholder: 'Digite a edição'
        },
        {
            label: 'Editora',
            id: 'editora',
            type: 'text',
            placeholder: 'Digite a editora'
        },
        {
            label: 'Ano de lançamento',
            id: 'preco',
            type: 'date',
            placeholder: 'Digite o ano de lançamento do livro'
        },
    ]
}

export const listForPagCadastroAutor = {
    titulo: "Cadastro de Autores",
    nomeBotao: 'Cadastrar',
    list: [{
            label: 'Nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite o nome do livro'
        },
        {
            label: 'Genero',
            id: 'genero',
            type: 'text',
            placeholder: 'Digite o Genero Literario do autor'
        },
        {
            label: 'Edição',
            id: 'edicao',
            type: 'text',
            placeholder: 'Digite a edição'
        },
        {
            label: 'Editora',
            id: 'editora',
            type: 'text',
            placeholder: 'Digite a editora'
        },
        {
            label: 'Ano de lançamento',
            id: 'preco',
            type: 'date',
            placeholder: 'Digite o ano de lançamento do livro'
        },
    ]
}

export const listForPagPagamento = {
    titulo: "Pagamento",
    nomeBotao: 'Pagar',
    list: [{
            label: 'Estado',
            id: 'estado',
            type: 'text',
            placeholder: 'Digite o seu estado'
        },
        {
            label: 'Cidade',
            id: 'cidade',
            type: 'text',
            placeholder: 'Digite a sua cidade'
        },
        {
            label: 'Endereco',
            id: 'endereco',
            type: 'text',
            placeholder: 'Digite o número e rua'
        },
        {
            label: 'Complemento',
            id: 'complemento',
            type: 'text',
            placeholder: 'Digite o complemento'
        },
        {
            label: 'CEP',
            id: 'cep',
            type: 'text',
            placeholder: 'Digite o CEP'
        },
        {
            label: 'Forma de Envio',
            id: 'formaDeEnvio',
            type: 'text',
            placeholder: 'Escolha a forma de envio'
        },
        {
            label: 'Número do cartão',
            id: 'numeroDoCartao',
            type: 'text',
            placeholder: 'Número do cartão'
        },
        {
            label: 'Data de Validade',
            id: 'dataDeValidade',
            type: 'text',
            placeholder: 'MM/AA'
        },
        {
            label: 'CVV',
            id: 'cvv',
            type: 'text',
            placeholder: 'XXX'
        },
    ]
}