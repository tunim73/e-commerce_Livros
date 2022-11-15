export const listForFormCadastro = {
    nomeBotao: "Cadastrar",
    titulo: "Cadastra-se",
    list: [{
            label: 'nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite seu nome',
            required: false,
            maxlength: 30,
            minlength: 3,
        },
        {
            label: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'Digite seu email',
            required: false,
        },
        {
            label: 'senha',
            id: 'senha',
            type: 'password',
            placeholder: 'Digite sua senha',
            required: false,
            maxlength: 10,
            minlength: 6,
        },
        {
            label: 'Confirme sua senha',
            id: 'confirmaSenha',
            type: 'password',
            placeholder: 'Confirme sua senha novamente',
            required: false,
            maxlength: 10,
            minlength: 6
        }
    ]
}

export const listForFormLogin = {

    nomeBotao: "Login",
    titulo: "Login",
    list: [{
            label: 'email',
            id: 'email',
            type: 'email',
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
            placeholder: 'Digite o nome do livro',
            maxlength: 30,

        },
        {
            label: 'Categoria',
            id: 'categoria',
            type: 'text',
            placeholder: 'Insira as categorias do livro',
            maxlength: 30,
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
            placeholder: 'Digite a sinopse do livro',
            maxlength: 150
        },
        {
            label: 'Autor',
            id: 'autor',
            type: 'text',
            placeholder: 'Digite o autor',
            maxlength: 30
        },
        {
            label: 'Edição',
            id: 'edicao',
            type: 'text',
            placeholder: 'Digite a edição',
            maxlength: 15
        },
        {
            label: 'Editora',
            id: 'editora',
            type: 'text',
            placeholder: 'Digite a editora',
            maxlength: 15,
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
            placeholder: 'Digite o nome do livro',
            maxlength: 30,
        },
        {
            label: 'Genero',
            id: 'genero',
            type: 'text',
            placeholder: 'Digite o Genero Literario do autor',
            maxlength: 15
        },
        {
            label: 'Edição',
            id: 'edicao',
            type: 'text',
            placeholder: 'Digite a edição',
            maxlength: 15,
        },
        {
            label: 'Editora',
            id: 'editora',
            type: 'text',
            placeholder: 'Digite a editora',
            maxlength: 15,
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
            placeholder: 'Digite o seu estado',
            maxlength: 15,
        },
        {
            label: 'Cidade',
            id: 'cidade',
            type: 'text',
            placeholder: 'Digite a sua cidade',
            maxlength: 15,
        },
        {
            label: 'Endereco',
            id: 'endereco',
            type: 'text',
            placeholder: 'Digite o número e rua',
            maxlength: 20,
        },
        {
            label: 'Complemento',
            id: 'complemento',
            type: 'text',
            placeholder: 'Digite o complemento',
            maxlength: 20,
        },
        {
            label: 'CEP',
            id: 'cep',
            type: 'text',
            placeholder: 'Digite o CEP',
            minlength: 8,
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
            placeholder: 'Número do cartão',
            maxlength: 16,
            minlength: 16
        },
        {
            label: 'Data de Validade',
            id: 'dataDeValidade',
            type: 'text',
            placeholder: 'MM/AA',
            maxlength: 5,
            minlength: 5
        },
        {
            label: 'CVV',
            id: 'cvv',
            type: 'text',
            placeholder: 'XXX',
            maxlength: 3,
            minlength: 3
        },
    ]
}