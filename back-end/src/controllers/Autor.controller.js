const autorService = require("../services/autor.service")

class AutorController {

    static async createAutor(req, res) {

        try {
            const {
                nome,
                genero,
                biografia,
                anoDeNascimento,
            } = req.body;

            if (!nome || !genero || !biografia || !anoDeNascimento)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newAutor = await autorService.criar({
                nome,
                genero,
                biografia,
                anoDeNascimento,
            })

            return res.status(201).json({
                status: true,
                newAutor
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateAutor(req, res) {

        try {
            const {
                nome,
                genero,
                biografia,
                anoDeNascimento

            } = req.body;
            const id = req.params.id;
            if (!nome || !genero || !biografia || !anoDeNascimento)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });

            const autor = await autorService.atualizar(
                id,
                nome,
                genero,
                biografia,
                anoDeNascimento,
            );

            return res.status(201).json({
                status: true,
                autor
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readAutor(req, res) {
        const { id } = req.params;
        const Autor = await autorService.consultar(id)
        if (!Autor) {
            return res.status(400).send({ message: "Autor não encontrado" })
        }
        return res.status(201).json({
            status: true,
            Autor
        });

    }

    static async readAutorAll(req, res) {

        try {
            const Autor = await autorService.consultarTudo();

            if (Autor.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Autor);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteAutor(req, res) {

        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ msg: "Id não encontrado!", status: false });
            }

            await autorService.deletar(id)

            return res.status(201).json({
                status: true,
                msg: "Autor apagado com sucesso"

            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = AutorController