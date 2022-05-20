const Filmes = require("./Filmes");
const Generos = require("./Generos");
const Clientes = require("./Clientes");
const Reservas = require("./Reservas");
const Enderecos = require("./Enderecos");

Clientes.hasOne(Enderecos);
Enderecos.belongsTo(Clientes, {
    foreignKey: "cliente_codigo",
});

Filmes.belongsToMany(Generos, { foreignKey: "filme_codigo", through: "filme_genero"});
Generos.belongsToMany(Filmes, { foreignKey: "genero_codigo", through: "filme_genero"});

module.exports = {
    Filmes,
    Generos,
    Clientes,
    Reservas,
    Enderecos,
};