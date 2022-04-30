const Filmes = require("../model/Filmes");

const filmesController = {
    async listarTudao(req, res) {
        try {
            const lista = await Filmes.findAll();
            res.status(200);
            res.json(lista);
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados dos filmes");
        }
        // qual seria a logica normal? fazer um select * na tabela movie e retornar um jsonsao com todos os filmes
    },
    async buscarPeloId(req, res) {
        const idFilme = req.params['id'];
        console.log("id da url recuperado = " + req.params["id"])
        // qual seria a logica normal? fazer um select * com where do ID
        try {
            const filme = await Filmes.findByPk(idFilme);
            if (filme){  // filme é diferente de UNDEFINED?
                res.status(200);
                res.json(filme);
            }
            else{
                res.status(404); // not found
                res.send("Filme de identificacao "+idFilme+" nao encontrado");
            }
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados do banco")
        }
    }
}

module.exports = filmesController;