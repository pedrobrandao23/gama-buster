// solicita a biblioteca do express
const express = require('express');

// atalho para que o express consiga utilizar os métodos GET, POST...
const routes = express.Router();

// faz a requisição do Controller para esse arquivo
const produtoController = require('../controllers/produtoController');
const HomeController = require('../controllers/home');
const ProductController = require('../controllers/product')

//-------------------------------------------------------------------------------------------------------------------------

// Rotas criadas neste próprio arquivo (menos organizado e mais difícil de fazer manutenção)

routes.get("/produto/:id/:categoria", (req, res) => {
    console.log(req.params);
    res.send("boa");
});

routes.post("/cadastrar", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

// Rotas criadas com mais organização a partir do objeto que está no produtoController.js

routes.get("/produto/lista", produtoController.listarProdutos);

routes.post("/produto/cadastrar", produtoController.cadastrarProdutos);


routes.get("/", HomeController.sayHello);
//-------------------------------------------------------------------------------------------------------------------------


// Exercícios: criar rota /products para cadastro de produtos que responda reqs pelos metodos get, post, put, delete.

//get todos os produtos
routes.get("/produto/lista-produtos", (req, res) =>{
    res.json([])
});

// get por id
routes.get("/produto/lista-produtos/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        id,
        name: `Produto ${id}`,
        price: 300,
    });
});

//post 
routes.post("/produto/cadastrar-produto", (req, res) => {
    res.json(req.body)
});

//put
routes.put("/produto/atualizar-produto/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        id,
        ... (req.body || {})
    });
});

// delete
routes.delete("/produto/excluir/:id", (req, res) => {
    res.status(204).send("");
});

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do product.js

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Necessário para que o arquivo do controller receba as rotas
module.exports = routes;