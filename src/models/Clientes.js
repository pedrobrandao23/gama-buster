// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Clientes = db.define(
    "Cliente",
    {
      codigo: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      cpf: {
          type: DataTypes.STRING,
          allowNull: false
      },      
      email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nascimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.NUMBER,
        allowNull: false
    }            
    },
    {
        tableName: "clientes",
        timestamps: false
    }
);

module.exports = Clientes
