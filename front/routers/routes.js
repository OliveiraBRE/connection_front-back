const express = require('express');
const Controller = require('../controllers/Controller');

const route = express.Router();

const ctrl = new Controller;

route.get('/', ctrl.getData)
route.get('/:member', ctrl.getMember)

module.exports = route