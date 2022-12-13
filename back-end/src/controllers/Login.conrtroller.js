const userService = require("../services/user.service")
const bcrypt = require ('bcrypt');
const env = require("../const/chaveJWT.json")
const jwt = require ('jsonwebtoken');

class LoginController {

     static async login(req,res)
    {
        const {email, senha} = req.body;

        try{

            if(!email||!senha) 
                return res.status(300).json({msg: "Preencha todos os campos obrigatórios", status: false});
            
            const user = await userService.consultarPorEmail(email);
                
            if(!user) 
                return res.status(404).json({msg: "Usuário não existe!", status:false} );

            const verificaPassword = bcrypt.compareSync(senha,user.senha);  
            
            if(!verificaPassword) 
                return res.status(300).json({msg:"Senha incorreta", status:false});

            const {_id, nome} = user;
                
            const token  = jwt.sign({id: _id, nome, email}, env.chave );
            
            return res.status(202).json(
            { 
                user: {id : _id, nome}, 
                token, 
                status: true 
            }
            );

        } catch(error)
        { 
            res.status(500).json({msg:error.message})
        }
    }
}


module.exports = LoginController