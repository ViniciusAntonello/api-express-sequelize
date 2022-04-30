const produtoController = {
    cadastrar(req, res) {
        console.log("estou na funcao cadastrar");
        res.send("PRODUTOcontroller-cadastrar");
    },
    listarTudao(req, res) {
        console.log("estou na funcao de listar tudao");
        res.send("PRODUTOcontroller-listartudao");
    },
    alterar(req, res){
        console.log("estou na funcao de alterar");
        res.send("PRODUTOcontroller-alterar");
    },
    apagar(req, res){
        console.log("estou na funcao de apagar");
        res.send("PRODUTOcontroller-apagar");
    },
    listarDetalhes(req, res){
        let idProduto = req.params['id'];
        console.log("estou nos detalhes do produto "+idProduto);
        res.send("PRODUTOcontroller-detalhes-"+idProduto);
    }

}

module.exports = produtoController;