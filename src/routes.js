const { Router } = require('express');

const indexController = require("./controllers/homeController");
const clienteController = require("./controllers/clienteController");
const corridaController = require("./controllers/corridaController");

const routes = Router();

routes.get('/', indexController.index);

//Sessão de clientes
routes.get("/clientes", clienteController.index);
routes.post("/clientCreated", clienteController.created);
routes.put("/clientUpdate", clienteController.updated);
routes.delete("/clientDelete", clienteController.delete);

//Sessão de corridas
routes.get("/corrida", corridaController.index);
routes.post("/corrida", corridaController.created);
routes.put("/corrida", corridaController.updated);
routes.delete("/corrida/:id", corridaController.delete);

module.exports = routes;