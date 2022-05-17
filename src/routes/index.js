// solicita a biblioteca do express
const express = require('express');

// atalho para que o express consiga utilizar os métodos GET, POST...
const routes = express.Router();

// faz a requisição do Controller para esse arquivo

const HomeController = require('../controllers/home');
const ClientesController = require('../controllers/clientes');
const FilmesController = require('../controllers/filmes');
const GenerosController = require('../controllers/generos');
const ReservasController = require('../controllers/reservas');


//-------------------------------------------------------------------------------------------------------------------------
// Rota Home

routes.get("/", HomeController.index)

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do cliente.js

routes.get("/clientes", ClientesController.index);
routes.post("/clientes", ClientesController.store);
routes.get("/clientes/:id", ClientesController.show);
routes.put("/clientes/:id", ClientesController.update);
routes.delete("/clientes/:id", ClientesController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do filme.js

routes.get("/filmes", FilmesController.index);
routes.post("/filmes", FilmesController.store);
routes.get("/filmes/:id", FilmesController.show);
routes.put("/filmes/:id", FilmesController.update);
routes.delete("/filmes/:id", FilmesController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do genero.js

routes.get("/generos", GenerosController.index);
routes.post("/generos", GenerosController.store);
routes.get("/generos/:id", GenerosController.show);
routes.put("/generos/:id", GenerosController.update);
routes.delete("/generos/:id", GenerosController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do genero.js

routes.get("/reservas", ReservasController.index);
routes.post("/reservas", ReservasController.store);
routes.get("/reservas/:id", ReservasController.show);
routes.put("/reservas/:id", ReservasController.update);
routes.delete("/reservas/:id", ReservasController.destroy);

//-------------------------------------------------------------------------------------------------------------------------


// Necessário para que o arquivo do controller receba as rotas
module.exports = routes;