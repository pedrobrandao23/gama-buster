// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Filmes = db.define(
  "Filme",
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
    ano_lancamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    duracao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    tableName: "filme", timestamps: false
  }
);

module.exports = Filmes;