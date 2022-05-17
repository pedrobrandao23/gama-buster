const Generos = require("../models/Generos");

const GenerosController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDeGeneros = await Generos.findAll();
        res.json([listaDeGeneros]);
    },

    // Criação de um novo produto
    store: async (req, res) => {
        const { nome } = req.body;

        const novoGenero = await Generos.create({ nome });

        res.json(novoGenero);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const generos = await Generos.findByPk(id);

        if (generos) {
            return res.json(generos);
        };

        res.status(404).json({
            message: "Genero não encontrado"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;

        const generoAtualizado = await Generos.update({ nome },
        {
            where: {
                codigo: id
            }
        })
    
        res.json("Gênero atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        await Generos.destroy({
            where:{
                codigo: id
            }
        })
        res.status(204).send("");
    }
};
    

module.exports = GenerosController;

