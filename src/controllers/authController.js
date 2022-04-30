const Usuarios = require("../model/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const authController = {
    async login(req, res){
        try{
            const {email, senha} = req.body;
            const userLogado = await Usuarios.findOne({
                where: {
                    email
                }
            });

            if (!userLogado){
                return res.status(404).json("Usuario inexiste na base de dados");
            }
            else{ // usuario existe na base de dados
                if (!bcrypt.compareSync(senha, userLogado.senha)){
                    return res.status(401).json("Senha Invalida");
                }
            }
            const token = jwt.sign({
                id:userLogado.id,
                nome:userLogado.nome,
                email:userLogado.email
            }, secret.chave);

            return res.json(token);
        }
        catch(error){
            console.log("DEU RUIM NO LOGIN");
            console.error(error);
            return res.status(500).json("Erro ao executar login");
        }

    }
}

module.exports = authController;