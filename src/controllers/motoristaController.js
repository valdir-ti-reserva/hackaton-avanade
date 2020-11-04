const { Motorista } = require("../models/index");
const motoristaController = {
  async index(req, res) {
    const motoristas = await Motorista.findAll();

    return res.status(200).json("Rota para motorista", motoristas);
  },
  async details(req, res) {
    const { id } = req.body;
    const cliente = await Motorista.findOne({ where: { id } });

    return res.status(200).json(cliente);
  },
  async create(req, res) {
    const { name, email, telefone } = req.body;
    const now = new Date();
    try {
      const newMotorista = await Motorista.create({
        name,
        email,
        idCarro,
        telefone,
        createdAt: now,
        updatedAt: now,
      });

      return res.status(201).json(newMotorista);
    } catch (err) {
      console.log(err);
      res.status(401).send({ Erro: "Erro ao inserir motorista " + err });
    }
  },
  async update(req, res) {
    const { id, name, email, telefone } = req.body;
    const now = new Date();
    try {
      const updateMotorista = await Motorista.update(
        { name, email, idCarro, telefone, createdAt: now, updatedAt: now },
        { where: { id } }
      );

      return res.status(201).json(updateMotorista);
    } catch (err) {
      console.log(err);
      res.status(401).send({ Erro: "Erro ao atualizar cliente " + err });
    }
  },
  async delete(req, res) {
    const { id } = req.body;
    await Motorista.destroy({
      where: { id },
    });

    return res.status(200).json("Deletado com sucesso!");
  },
};

module.exports = motoristaController;
