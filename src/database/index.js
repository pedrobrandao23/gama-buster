// importação do Sequelize
const sequelize = require("sequelize");

// configurações do banco de dados
const DB_NAME = "gamabuster";
const DB_USER = "root";
const DB_PASS = "123456gamabuster";
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error){
    console.error("Erro ao tentar conexão com database: ", error.message);
};

async function hasConnection(){
    try {
      await db.authenticate();
      console.log("DB conectado");  
    } catch (error) {
        console.error("Erro ao tentar conexão com database: ", error.message);
    }
};

Object.assign(db, {
    hasConnection
});

module.exports = db;