const { Router } = require('express');

const indexController = require("./controllers/homeController")

const routes = Router();

routes.get('/', indexController.index);

module.exports = routes;