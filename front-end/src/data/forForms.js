import * as yup from "yup";

/*
const schema = yup.object({
    categoria: yup.string().required('campo obrigatório'),
    preco: yup.number().positive().integer().required('campo obrigatório'),
    biografia:yup.string().min(10).max(256).required('campo obrigatório'),
    sinopse: yup.string().min(10).max(256).required('campo obrigatório'),
    autor: yup.string().required('campo obrigatório'),
    edicao: yup.string().required('campo obrigatório'),
    editora: yup.string().required('campo obrigatório'),
  });
*/


export const listForFormCadastro = {
    nomeBotao: "Cadastrar",
    titulo: "Cadastra-se",
    schema: yup.object({
            nome: yup
                .string().required("O nome é obrigatório"),
            email: yup
                .string()
                .email("Digite um email válido")
                .required("O email é obrigatório"),
            senha: yup
                .string()
                .min(6, "A senha deve ter pelo menos 6 digitos")
                .required("A senha é obrigatória"),
            confirmaSenha: yup
                .string()
                .required("Confirmar a senha é obrigatório")
                .oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
        })
        .required(),

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
        schema: yup.object({
            email: yup.
            string().
            email().
            required('campo obrigatório'),
            senha: yup.
            string().
            min(6).
            max(10).
            required('campo obrigatório'),
        }),
        list: [{
                label: 'email',
                id: 'email',
                type: 'email',
                placeholder: 'Digite seu e-mail',
                //required: false
            },
            {
                label: 'senha',
                id: 'senha',
                type: 'password',
                placeholder: 'Digite sua senha',
                //required: false

            }
        ]
    }
    /** Entendi que esse objeto é do cadastroLivro */
export const listForPagCadastroCategoria = {
    titulo: "Cadastro de Categorias",
    nomeBotao: 'Cadastrar',
    schema: yup.object({
        nome: yup.string().required("O nome é obrigatório"),
        categoria: yup.string().required('campo obrigatório'),
        preco: yup.number().positive().integer().required('campo obrigatório'),
        sinopse: yup.string().min(10).max(256).required('campo obrigatório'),
        autor: yup.string().required('campo obrigatório'),
        edicao: yup.string().required('campo obrigatório'),
        editora: yup.string().required('campo obrigatório'),
    }),
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

        /*{
            label: 'Ano de lançamento',
            id: 'anoLancamento',
            type: 'date',
            placeholder: 'Digite o ano de lançamento do livro'
        },*/

    ]
}

export const listForPagCadastroAutor = {
    titulo: "Cadastro de Autores",
    nomeBotao: 'Cadastrar',
    schema: yup.object({
        nome: yup.string().max(126).required("O nome é obrigatório"),
        genrero: yup.string().max(15).required('campo obrigatório'),
        biografia: yup.string().min(10).max(256).required('campo obrigatório'),
        anoDeNascimento: yup.string().max(10).required("campo obrigatório"),

    }),
    list: [{
            label: 'Nome',
            id: 'nome',
            type: 'text',
            placeholder: 'Digite o nome do livro',
        },
        {
            label: 'Genero Atuante',
            id: 'genero',
            type: 'text',
            placeholder: 'Digite o Genero Literario do autor',

        }, {
            label: 'Biografia',
            id: 'biografia',
            type: 'text',
            placeholder: 'Digite a sinopse do livro',

        },
        {
            label: 'Ano de Nascimento',
            id: 'anoDeNascimento',
            type: 'text',
            placeholder: 'DD/MM/AAAA',

        },
    ]
}

export const listForPagPagamento = {
    titulo: "Pagamento",
    nomeBotao: 'Pagar',
    schema: yup.object({
        estado: yup.string().max(32).required("O nome é obrigatório"),
        cidade: yup.string().max(32).required('campo obrigatório'),
        endereco: yup.string().max(126).required('campo obrigatório'),
        complemento: yup.string().min(10).max(256),
        cep: yup.number().max(8).required('campo obrigatório'),
        formaDeEnvio: yup.string().required('campo obrigatório'),
        numeroDoCartao: yup.string().max(16).required('campo obrigatório'),
        dataDeValidade: yup.string().max(5).required('campo obrigatorio'),
        cvv: yup.number().max(3).required('campo obrigatorio'),
    }),

    list: [{
            label: 'Estado',
            id: 'estado',
            type: 'text',
            placeholder: 'Digite o seu estado',
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
        },
        {
            label: 'Complemento',
            id: 'complemento',
            type: 'text',
            placeholder: 'Digite o complemento',
        },
        {
            label: 'CEP',
            id: 'cep',
            type: 'text',
            placeholder: 'CEP: XXXXXXXX',

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
        },
        {
            label: 'Data de Validade',
            id: 'dataDeValidade',
            type: 'text',
            placeholder: 'MM/AA',

        },
        {
            label: 'CVV',
            id: 'cvv',
            type: 'text',
            placeholder: 'XXX',
            pattern: "[0-9]",
        },
    ]
}