// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Generos = db.define(
  "FilmesGeneros",
  {},
  {
    tableName: "filme_genero", timestamps: false, underscored: true
  }
);

module.exports = Generos;
