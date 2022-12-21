const jwt = require('jsonwebtoken');
const env = require('../const/chaveJWT.json');


function auth (req, res, next){

    const authToken = req.headers.authorization;
    
    if(!authToken) return res.status(400).json({msg: "Token não identificado"});
        
    const [,token] = authToken.split(" ");

    console.log(`
        authToken = ${authToken},
        token = ${token}XXuxa
    `)

    jwt.verify(token, env.chave, (error,data) => {

        if(error){
            return res.status(401).json({err:"Falha na autenticação do token"});
        }
        else{
            return next();
        }  
    })
}

module.exports = auth