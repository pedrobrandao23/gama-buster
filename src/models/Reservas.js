// importando a conexão
const db = require("../database");
// "tradutor" de SQL
const { DataTypes } = require("sequelize");

const Reservas = db.define(
  "Reserva",
  {
    numero_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    data_devolucao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cliente_codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    quantidade_filme: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valor_total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }
  },
  {
    tableName: "reserva", timestamps: false
  }
);

module.exports = Reservas;