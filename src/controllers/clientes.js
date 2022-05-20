const { Clientes, Enderecos } = require("../models")

const ClientesController = {
  // Listar todos
  index: async (req, res) => {
    try {
      const listaDeClientes = await Clientes.findAll({ include: Enderecos });
      res.json([listaDeClientes]);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },

  // Criação de um novo produto (na relação 1:1 cliente e endereço, são vinculados assim em sua criação)
  store: async (req, res) => {
    try {
      const {
        cpf,
        email,
        nascimento,
        nome,
        sobrenome,
        telefone,
        endereco = {},
      } = req.body;

      const { cep, logradouro, numero, bairro, cidade, uf } = endereco;

      const novoCliente = await Clientes.create(
        {
          cpf,
          email,
          nascimento,
          nome,
          sobrenome,
          telefone,
          Enderecos: {
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf
          },
        },
        { include: [Enderecos] }
      );

      res.json(novoCliente);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },

  // Obter item específico
  show: async (req, res) => {
    const { id } = req.params;

    const clientes = await Clientes.findByPk(id, { include: Enderecos });

    if (clientes) {
      return res.json(clientes);
    }

    res.status(404).json({
      message: "Cliente não encontrado",
    });
  },

  // Atualização
  update: async (req, res) => {
    const { id } = req.params;
    const { cpf, email, nascimento, nome, sobrenome, telefone } = req.body;

    const clienteAtualizado = await Clientes.update(
      {
        cpf,
        email,
        nascimento,
        nome,
        sobrenome,
        telefone,
      },
      {
        where: {
          codigo: id,
        },
      }
    );

    res.json("Cliente atualizado");
  },

  // Remoção
  destroy: async (req, res) => {
    const { id } = req.params;
    await Clientes.destroy({
      where: {
        codigo: id,
      },
    });
    res.status(204).send("");
  },
};
    

module.exports = ClientesController;

