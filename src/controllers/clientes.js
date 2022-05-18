const Clientes = require("../models/Clientes");

const ClientesController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDeClientes = await Clientes.findAll();
        res.json([listaDeClientes]);
    },

    // Criação de um novo produto
    store: async (req, res) => {
        const { cpf, email, nascimento, nome, sobrenome, telefone } = req.body;

        const novoCliente = await Clientes.create({
            cpf,
            email,
            nascimento,
            nome,
            sobrenome,
            telefone
        });

        res.json(novoCliente);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const clientes = await Clientes.findByPk(id);

        if (clientes) {
            return res.json(clientes);
        };

        res.status(404).json({
            message: "Cliente não encontrado"
        })
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { cpf, email, nascimento, nome, sobrenome, telefone } = req.body;

        const clienteAtualizado = await Clientes.update({
            cpf,
            email,
            nascimento,
            nome,
            sobrenome,
            telefone
        },
        {
            where: {
                codigo: id
            }
        });
    
        res.json("Cliente atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        await Clientes.destroy({
            where:{
                codigo: id
            }
        })
        res.status(204).send("");
    }
};
    

module.exports = ClientesController;

