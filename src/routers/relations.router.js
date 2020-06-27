const Router = require('express').Router();
const relationsController = require('../controllers/relations.controller');

Router.get('/', relationsController.getAllRelations);

module.exports = Router;