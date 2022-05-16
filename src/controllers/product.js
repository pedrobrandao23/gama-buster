const ProductController = {
    
    // Listar todos
    index: (req, res) => {
        res.json([]);
    },

    // Criação de um novo produto
    store: (req, res) => {
        res.json([]);
    },

    // Obter item específico
    show: (req, res) => {
        const { id } = req.params;
    
        res.json({
            id,
            name: `Produto ${id}`,
            price: 300,
        });
    },

    // Atualização
    update: (req, res) => {
        const { id } = req.params;
    
        res.json({
            id,
            ... (req.body || {})
        });
    },

    // Remoção
    destroy: (req, res) => {
        res.status(204).send("");
    }
};
    

module.exports = ProductController;

