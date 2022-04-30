const Usuarios = require("../model/Usuarios");
const bcrypt = require("bcryptjs");

const usuariosController = {

    async cadastrar(req, res) {
        try {
            // capturei os dados da request numa estrutura
            const { nome, email, senha } = req.body;
            // criei a nova senha criptografada a partir do que o usuario me mandou
            const novaSenha = bcrypt.hashSync(senha, 10);
            const novoUser = await Usuarios.create({nome, email, senha: novaSenha});
            return res.status(201).json(novoUser);
        }
        catch (error) {
            console.log("---> DEU RUIM NO CADASTRAR DO USUARIO");
            console.error(error);
            return res.status(500).json("deu ruim ao cadastrar usuario");
        }
    }
}

module.exports = usuariosController;