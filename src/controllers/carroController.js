const { Carro } = require('../models/Carro');
const carroController = {
    async index(req, res) {
        const carros = await Carro.findAll();
        return res.status(200).json(carros)
    },
    async details(req, res){
        const { id } = req.body
        const carro = await Carro.findOne({ where:{ id }})

        return res.status(200).json(carro);
    },
    async created(req, res) {
        const { placa, modelo } = req.body;
        try{
            const novoCarro = await Carro.create({placa, modelo});

            return res.status(201).json(novoCarro);

        } catch (err){
            console.log(err)
            res.status(401).send({Erro: "Erro ao inserir carro " + err})
        }
    },
    async updated(req,res) {
        const { id, placa, modelo } = req.body;
        try{
            const atualCarro = await Carro.update({placa, modelo}, { where:{ id }});

            return res.status(201).json(atualCarro);

        } catch (err){
            console.log(err)
            res.status(401).send({Erro: "Erro ao atualizar carro " + err})
        }
    },
    async delete(req,res) {
        const { id } = req.body
        await Carro.destroy({
            where:{ id }
        })

        return res.status(200).json("Carro deletado com sucesso!");
    },
}

module.exports = carroController