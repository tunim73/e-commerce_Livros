const userService = require("../services/user.service")

class UserController {

    static async createUser (req,res) {

        try {
            const {nome,senha,email} = req.body;

            if(!nome || !email || !senha) 
            return res.status(203).json({msg:"Preencha todos os campos!",status:false});
        
            const newUser = await userService.criar({nome,senha,email})

            return res.status(201).json({
                status:true,
                newUser
            });
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }


}



module.exports = UserController