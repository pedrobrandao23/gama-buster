const Reservas = require("../models/Reservas");

const ReservasController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDeReservas = await Reservas.findAll();
        res.json([listaDeReservas]);
    },

    // Criação de um novo produto
    store: async (req, res) => {
        const { numero_pedido, cliente_codigo, data_devolucao, quantidade_filme, valor_total } = req.body;

        const novaReserva = await Reservas.create({ 
            numero_pedido, 
            cliente_codigo, 
            data_devolucao, 
            quantidade_filme, 
            valor_total 
        });

        res.json(novaReserva);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const reservas = await Reservas.findByPk(id);

        if (reservas) {
            return res.json(reservas);
        };

        res.status(404).json({
            message: "Reserva não encontrada"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { numero_pedido, cliente_codigo, data_devolucao, quantidade_filme, valor_total } = req.body;

        const reservaAtualizada = await Reservas.update({ 
            numero_pedido, 
            cliente_codigo, 
            data_devolucao, 
            quantidade_filme, 
            valor_total 
        },
        {
            where: {
                numero_pedido: id
            }
        });
    
        res.json("Reserva atualizada");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        await Reservas.destroy({
            where:{
                numero_pedido: id
            }
        })
        res.status(204).send("");
    }
};
    

module.exports = ReservasController;

