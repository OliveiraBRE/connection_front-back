const express = require('express');
const Controller = require('../controllers/Controller');

const route = express.Router();
const ctrl = new Controller;


route.get('/', ctrl.sendData);
route.get('/:member', ctrl.sendMember);


module.exports = route;