const userService = require("../services/user.service")

class UserController {

    static async createUser(req, res) {

        try {
            const { nome, senha, email } = req.body;

            if (!nome || !email || !senha)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newUser = await userService.criar({ nome, senha, email })

            return res.status(201).json({
                status: true,
                newUser
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateUser(req, res) {

        try {
            const { nome, senha, email } = req.body;

            if (!nome || !email || !senha)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newUser = await userService.atualizar({ nome, senha, email })

            return res.status(201).json({
                status: true,
                newUser
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readUser(req, res) {
        const id = req.parms.id

        const User = userService.consultar(id)
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
                    message: "There are no registered users",
                });
            }

            res.status(200).json(Users);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {

        try {
            const { nome, senha, email } = req.body;

            if (!nome || !email || !senha)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newUser = await userService.deletar({ nome, senha, email })

            return res.status(201).json({
                status: true,
                newUser
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}



module.exports = UserController