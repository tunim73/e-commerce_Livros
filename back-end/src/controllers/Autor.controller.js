const autorService = require("../services/autor.service")
const fs = require("fs")
class AutorController {

    static async createAutor(req, res) {

        try {
            let {
                nome,
                genero,
                biografia,
                image
            } = req.body;

            if (req.file) {
                image = req.file.path
            } else if (req.file === undefined) {
                image = "src/assets/padrao.jpg"
            }

            if (!nome || !genero || !biografia)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newAutor = await autorService.criar({
                nome,
                genero,
                biografia,
                //anoDeNascimento,
                image
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
            let {
                nome,
                genero,
                biografia,
                anoDeNascimento,
                image
            } = req.body;
            const id = req.params.id;
            const file = req.file
            if (file) {
                image = file.path
            }

            if (!nome && !genero && !biografia && !anoDeNascimento && !file)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });

            const autor = await autorService.atualizar(
                id,
                nome,
                genero,
                biografia,
                anoDeNascimento,
                image
            );
            if (autor.image != "src/assets/padrao.jpg") {
                const pathAntigo = autor.image
                fs.unlink(pathAntigo, (err) => {
                    if (err)
                        console.log("Deu erro ao apagar imagem antiga: ", err);
                })
            }










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