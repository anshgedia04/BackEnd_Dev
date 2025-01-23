const express  = require('express');
const { getAllEmp } = require('../controller/getAllEmp');
const { CreateEmp } = require('../controller/CreateEmp');

const routes = express.Router();

routes.get('/getAllEmp', getAllEmp);
routes.post('/addEmp', CreateEmp);

module.exports = routes;