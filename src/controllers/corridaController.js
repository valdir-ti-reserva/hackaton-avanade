const { Corrida } = require('../models');
const corridaController = {
    async index(req, res) {
        const corridas = await Corrida.findAll();
        // return res.status(200).json(corridas);        
        return res.status(200).json(corridas);
    },    
    async created(req, res) {
        // const { name, email, telefone } = req.body;
        // const now = new Date()
        // try{
        //      const newCliente = await Cliente.create({name, email, telefone, createdAt:now});
        //      return res.status(201).json(newCliente);
        // } catch (err){
        //     res.status(401).send({Erro: "Erro ao inserir cliente " + err})
        // }
    },
    async updated(req,res) {
        return res.status(201).json({details: 'Corrida atualizada'})
    },
    async delete(req,res) {
        return res.status(201).json({details: 'Corrida deletada'})
    },
}

module.exports = corridaController