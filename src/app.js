const express = require("express");
const routes = require("./routes");
const db = require("./database")
const cors = require("cors");
const trataErroValidacao = require("./middleware/trataErroValidacao");

const api = express();

db.checkConnection();

api.use(cors());
api.use(express.json()); // habilitamos a manipulacao de JSON na jogada
api.use(routes);
api.use(trataErroValidacao); // habilito o tratador de erros de validacao (meu middleware)


// esta instrução aqui que vai ficar esperando as requisições
api.listen(3000, () => {
    console.log("API rondando lindamente no na porta 3000");
    console.log("Acesse via http://localhost:3000");
});
