const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");


function trataErroValidacao(error, req, res, next){
    // verificar se estamos tratando uma ValidationError e se for isso mesmo
    // enviamos uma mensagem customizada
    if (error instanceof ValidationError){  // erros originários da funcao validate
        return res.status(error.statusCode).json(error);
    }
    else if (error instanceof UnauthorizedError){
        return res.status(403).json("Acesso Negado!");
    }
    console.error(error);
    return res.status(500).json(error);
}

module.exports = trataErroValidacao;