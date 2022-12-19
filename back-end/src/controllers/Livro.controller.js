const livroService = require("../services/livro.service")
const fs = require("fs")

class LivroController {

    static async createLivro(req, res) {

        try {

            let {
                nome,
                preco,
                descricao,
                autor,
                edicao,
                numSerial,
                image
            } = req.body;

            if (req.file) {
                image = req.file.path
            } else if (req.file === undefined) {
                image = "src/assets/padrao.jpg"
            }


            if (!nome || !preco || !descricao || !autor || !edicao || !numSerial)
                return res.status(203).json({ msg: "Preencha todos os campos!", status: false });

            const newLivro = await livroService.criar({
                nome,
                preco,
                descricao,
                autor,
                edicao,
                numSerial,
                image
            })

            return res.status(201).json({
                status: true,
                newLivro
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLivro(req, res) {

        try {
            let {
                nome,
                preco,
                descricao,
                autor,
                edicao,
                numSerial,
                image
            } = req.body;
            const id = req.params.id;
            const file = req.file
            if (file) {
                image = file.path
            }
            if (!nome && !preco && !descricao && !autor && !edicao && !numSerial && !file)
                return res.status(203).json({ msg: "Preencha pelo menos um campo!", status: false });
            
            const livro = await livroService.atualizar(
                id,
                nome,
                preco,
                descricao,
                autor,
                edicao,
                numSerial,
                image
            );
            if (livro.image !== "src/assets/padrao.jpg ") {
                const pathAntigo = livro.image
                fs.unlink(pathAntigo, (err) => {
                    if (err)
                        console.log("Deu erro ao apagar imagem antiga: ", err);
                })
            }

            return res.status(201).json({
                status: true,
                livro
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readLivro(req, res) {
        const { id } = req.params;
        const Livro = await livroService.consultar(id)
        if (!Livro) {
            return res.status(400).send({ message: "Livro não encontrado" })
        }
        return res.status(201).json({
            status: true,
            Livro
        });

    }

    static async readLivroAll(req, res) {

        try {
            const Livro = await livroService.consultarTudo();

            if (Livro.length === 0) {
                return res.status(400).json({
                    message: "Não há registros",
                });
            }

            res.status(200).json(Livro);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLivro(req, res) {

        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ msg: "Id não encontrado!", status: false });
            }

            await livroService.deletar(id)

            return res.status(201).json({
                status: true,
                msg: "Livro apagado com sucesso"

            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = LivroController