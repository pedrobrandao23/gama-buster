const Filmes = require("../models/Filmes");

const FilmesController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDeFilmes = await Filmes.findAll();
        res.json([listaDeFilmes]);
    },

    // Criação de um novo produto
    store: async (req, res) => {
        const { nome, ano_lancamento, duracao, estoque } = req.body;

        const novoFilme = await Filmes.create({ 
            nome,
            ano_lancamento,
            duracao,
            estoque 
        });

        res.json(novoFilme);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const filmes = await Filmes.findByPk(id);

        if (filmes) {
            return res.json(filmes);
        };

        res.status(404).json({
            message: "Filme não encontrado"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { nome, ano_lancamento, duracao, estoque } = req.body;

        const filmeAtualizado = await Filmes.update({ 
            nome,
            ano_lancamento,
            duracao,
            estoque 
        },
        {
            where: {
                codigo: id
            }
        });
    
        res.json("Filme atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        await Filmes.destroy({
            where:{
                codigo: id
            }
        })
        res.status(204).send("");
    }
};
    

module.exports = FilmesController;

