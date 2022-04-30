const express = require("express")
const produtoController = require("../controllers/produtoController");
const filmesController = require("../controllers/filmesController");
const usuariosController = require("../controllers/usuariosController");
const cadastroUserValidator = require("../validators/cadastroUserValidator");
const loginValidator = require("../validators/loginValidator");
const authController = require("../controllers/authController");
const autenticador = require("../middleware/autenticador");

const routes = express.Router();

// é no objeto routes que eu defino as rotas
routes.get("/produtos", produtoController.listarTudao);
routes.get("/produtos/:id", produtoController.listarDetalhes)
routes.post("/produtos", produtoController.cadastrar);
routes.put("/produtos", produtoController.alterar);
routes.delete("/produtos", produtoController.apagar);

// rotas para recuperar filmes
// rota 1 - quero recuperar um filme pelo seu ID
routes.get("/movies/:id", autenticador, filmesController.buscarPeloId);
// rota 2 - quero recuperar todos os filmes
routes.get("/movies", filmesController.listarTudao);


// rota para cadastar o bendito do usuario
routes.post("/usuarios", cadastroUserValidator,usuariosController.cadastrar);

// rota de login
routes.post("/login", loginValidator, authController.login);

module.exports = routes;