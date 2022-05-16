const produtoController = {
    listarProdutos: (req, res)=> {
        res.json([{ nome: "Produto 1"}, {nome: "Produto 2"}]);
    },

    cadastrarProdutos: (req, res) => {
        console.log(req.body);
        res.json("Produto cadastrado")
    }
};



module.exports = produtoController;