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

            const {_id, nome, pedido_id} = user;
                
            const token  = jwt.sign({id: _id, nome, pedido_id}, env.chave );
            
            return res.status(202).json(
            { 
                user: {id : _id, nome, pedido_id}, 
                token, 
                status: true 
            }
            );

        } catch(error)
        { 
            res.status(500).json({msg:error.message})
        }
    }

    static validateToken (req,res) {
        const { token } = req.body;

        try{  

            if(token === undefined)
                return res.status(203).json({msg: "Token não identificado!", status:false});
            
                
            jwt.verify(token, env.chave , (err,data) => {
        
                if(err)
                    return res.status(203).json({err:"Falha na autenticação do token!", status:false});

                return res.status(200).json({
                    status:true,
                    user:{
                        id:data.id,
                        nome:data.nome,
                        pedido_id:data.pedido_id
                    }
                });

            });                    

        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}


module.exports = LoginController