const bodyParser = require('body-parser');
const cors = require('cors')
const user = require("./user.router")
const livro = require("./livro.router")
module.exports = (app) => {

    app.get('/', (req, res) => {
            res.status(200).json({ mensagem: 'Hello World' });
        })
        .use(
            bodyParser.json(),
            cors(),
            user,
            livro,
        )
}