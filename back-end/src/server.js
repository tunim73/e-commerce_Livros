const express = require('express');
const routes = require ('./routes');
const connectDatabase = require("./database")
const app = express();
const port = 3001

connectDatabase()

routes(app);

app.listen(port, ()=> {
    console.log(`API rodando na porta ${port}`);
});

module.exports = app;