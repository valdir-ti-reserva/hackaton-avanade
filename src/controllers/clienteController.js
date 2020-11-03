const clienteController = {
    async index(req, res) {
        return res.status(200).json("Rota de clientes")
    },
    async created(req, res) {},
    async updated(req,res) {},
    async delete(req,res) {},
}

module.exports = clienteController