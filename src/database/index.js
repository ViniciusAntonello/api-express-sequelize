// objetivo deste arquivo
// estabelecer a conexao com o Banco de Dados. A partir dai, utilizmos esta definição
// para mapear nossas estruturas que irão recuperar/incluir/alterar dados do banco

// preciso importar o Sequelize 
const Sequelize = require("sequelize");

let db = {} // guardem este cara.. ele será nosso objeto que manterá a conexão com o banco

// vamos definir agora os parametros de conexao
const DATABASE_NAME = "movies";
const USERNAME      = "root";
const PASSWORD      = "mysql";
const DIALECT       = "mysql";
const HOSTNAME      = "localhost";
const PORT          = 3306;

const DB_SETUP = {
    dialect: DIALECT,
    host: HOSTNAME,
    port: PORT,
    define : {
       timestamps: false 
    }
}

// agora vamos tentar executar isso na buxa
try{
    db = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, DB_SETUP);
    console.log("Conexao ao banco de dados estabelecida");
}
catch(error){
    console.log("-------> DEU RUIM PARA CONECTAR NO BANCO");
    console.error(error);
}

async function checkConnection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado com sucesso!");
    }
    catch(error){
        console.log("---> NAO CONSIGO MANTER CONEXAO COM O BANCO...");
        console.error(error);
    }
}


// eu adiciono uma função a um objeto dinamicamente
Object.assign(db, {
    checkConnection
}); 



module.exports = db;