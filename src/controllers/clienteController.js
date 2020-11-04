const { Cliente } = require('../models/index');
const clienteController = {
    async index(req, res) {
        const clientes = await Cliente.findAll();

        return res.status(200).json("Rota de clientes!", clientes)
    },
    async details(req, res){
        const { id } = req.body
        const cliente = await Cliente.findOne({ where:{ id }})

        return res.status(200).json(cliente);
    },
    async created(req, res) {
        const { name, email, telefone } = req.body;
        const now = new Date()
        try{
            const newCliente = await Cliente.create({name, email, telefone, createdAt:now, updatedAt: now});

            return res.status(201).json(newCliente);

        } catch (err){
            console.log(err)
            res.status(401).send({Erro: "Erro ao inserir cliente " + err})
        }
    },
    async updated(req,res) {
        const { id, name, email, telefone } = req.body;
        const now = new Date()
        try{
            const atualCliente = await Cliente.update({name, email, telefone, createdAt:now, updatedAt: now}, { where:{ id }});

            return res.status(201).json(atualCliente);

        } catch (err){
            console.log(err)
            res.status(401).send({Erro: "Erro ao atualizar cliente " + err})
        }
    },
    async delete(req,res) {
        const { id } = req.body
        await Cliente.destroy({
            where:{ id }
        })

        return res.status(200).json("Deletado com sucesso!");
    },
}

module.exports = clienteController