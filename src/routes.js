const { Router } = require('express');

const indexController = require("./controllers/homeController");
const clienteController = require("./controllers/clienteController");
const corridaController = require("./controllers/corridaController");
const carroController = require("./controllers/carroController");
const motoristaController = require("./controllers/motoristaController");


const routes = Router();

routes.get('/', indexController.index);

//Sessão de clientes
routes.get("/clientes", clienteController.index);
routes.post("/clientCreated", clienteController.created);
routes.put("/clientUpdated", clienteController.updated);
routes.delete("/clientDelete", clienteController.delete);

//Sessão de corridas
routes.get("/corrida", corridaController.index);
routes.post("/corrida", corridaController.created);
routes.put("/corrida", corridaController.updated);
routes.delete("/corrida/:id", corridaController.delete);

//Sessão de carros
routes.get("/carro", carroController.index);
routes.post("/carro", carroController.created);
routes.put("/carro", carroController.updated);
routes.delete("/carro/:id", carroController.delete);

//Sessão de motoristas
routes.get("/motorista", motoristaController.index);
routes.post("/motoristaCreate", motoristaController.create);
routes.put("/motoristaUpdate", motoristaController.update);
routes.delete("/motoristaDelete/:id", motoristaController.delete);

module.exports = routes;