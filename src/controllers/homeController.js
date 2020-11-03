const indexController = {
    async index(req, res){
        
        
        return res.status(200).json("Bem vindo a API !")
    }
}

module.exports = indexController