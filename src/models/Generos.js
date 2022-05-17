// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Generos = db.define(
  "Genero",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "genero", timestamps: false
  }
);

module.exports = Generos;
