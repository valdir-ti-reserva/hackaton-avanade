const { Router } = require('express');

const indexController = require("./controllers/homeController");
const clienteController = require("./controllers/clienteController");

const routes = Router();

routes.get('/', indexController.index);

//Sessão de clientes
routes.get("/clientes", clienteController.index);

module.exports = routes;