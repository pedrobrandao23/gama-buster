// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Clientes = require("./Clientes");

const Enderecos = db.define(
  "Endereco",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cliente_codigo: {
      type: DataTypes.INTEGER,
      References: {
        model: Clientes,
        key: "codigo",
      },
      unique: true,
    },
  },
  {
    tableName: "endereco", 
    timestamps: false, 
    underscored: true
  }
);

module.exports = Enderecos;
