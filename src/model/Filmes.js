const db = require("../database");
const { DataTypes } = require("sequelize");

const Filmes = db.define(
    "Filmes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "movie_id"
        },
        titulo: {
            type: DataTypes.STRING,
            length: 1000,
            field: "title"

        },
        orcamento: {
            type: DataTypes.INTEGER,
            field: "budget"
        },
        homepage: {
            type: DataTypes.STRING,
            length: 1000,
            field: "homepage"
        },
        sinopse: {
            type: DataTypes.STRING,
            length: 1000,
            field: "overview"
        },
        popularidade: {
            type: DataTypes.DOUBLE,
            field: "popularity"
        },
        dataLancamento: {
            type: DataTypes.DATEONLY,
            field: "release_date"
        },
        faturamento: {
            type: DataTypes.INTEGER,
            field: "revenue"
        },
        duracao: {
            type: DataTypes.INTEGER,
            field: "runtime"
        },
        status: {
            type: DataTypes.STRING,
            length: 50,
            field: "movie_status"
        },
        tagline: {
            type: DataTypes.STRING,
            length: 1000,
            field: "tagline"
        },
        mediaAvaliacao: {
            type: DataTypes.DOUBLE,
            field: "vote_average"
        },
        numeroVotos: {
            type: DataTypes.INTEGER,
            field: "vote_count"
        }

    },
    {
        tableName: "movie"
    });

module.exports = Filmes;