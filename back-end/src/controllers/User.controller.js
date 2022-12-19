const userService = require("../services/user.service")
const bcrypt = require("bcrypt");
const pedidoService = require("../services/pedido.service")



class UserController {

    static async createUser(req, res) {

        try {
            const { nome, senha, email } = req.body;

            if (!nome || !email || !senha)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const senhaHash = UserController.hashDaSenha(senha);

            const newUser = await userService.criar({ nome, senha: senhaHash, email });            
            const newRequest = await pedidoService.criar({user_id:newUser._id});
            await userService.atualizar(newUser._id, {pedido_id:newRequest._id});
            
            return res.status(201).json({
                status: true,
            });
            
        } catch (error) {
            return res.status(500).json(error.message);
        }



    }

    static async updateUser(req, res) {

        try {
            const { nome, senha, email } = req.body;
            const id = req.params.id
            if (!nome && !email && !senha)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });

            const user = await userService.atualizar(
                id,
                {
                    nome,
                    senha,
                    email,
                }
            );

            return res.status(201).json({
                status: true,
                user
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readUser(req, res) {
        const { id } = req.params
        const User = await userService.consultarPorId(id)
        if (!User) {
            return res.status(400).send({ message: "User não encontrado" })
        }
        return res.status(201).json({
            status: true,
            User
        });

    }

    static async readUserAll(req, res) {

        try {
            const Users = await userService.consultarTudo();

            if (Users.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Users);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {

        try {
            const id = req.params.id

            if (!id) {
                return res.status(400).json({ msg: "Id não encontrado!", status: false });
            }

            await userService.deletar(id);
            await pedidoService.deletar(id);

            return res.status(201).json({
                status: true,
                msg: "Usuario apagado com sucesso"

            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static hashDaSenha(pass){
        if(!pass)
            return;
             
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);
        return hash;
    }

}
module.exports = UserController