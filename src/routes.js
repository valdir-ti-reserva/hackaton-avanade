const { Router } = require('express');

const indexController = require("./controllers/homeController");
const clienteController = require("./controllers/clienteController");

const routes = Router();

routes.get('/', indexController.index);

//Sessão de clientes
routes.get("/clientes", clienteController.index);
routes.post("/clientCreated", clienteController.created);
routes.put("/clientUpdate", clienteController.updated);
routes.delete("/clientDelete", clienteController.delete);

module.exports = routes;