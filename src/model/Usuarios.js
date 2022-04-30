const db = require("../database");
const { DataTypes } = require("sequelize");

// criar nosso model usuario
const Usuarios = db.define(
    "Usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id_user"
        },
        nome : {
            type: DataTypes.STRING,
            length: 100,
            field: "name"
        },
        email: {
            type: DataTypes.STRING,
            length: 100,
            field: "email"
        },
        senha : {
            type: DataTypes.STRING,
            length: 255,
            field: "password"
        }

    },
    {
        tableName:"movie_user"
    }
);

module.exports = Usuarios;