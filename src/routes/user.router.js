const { getAll } = require('../controllers/user.controllers'); //cambiar nombre del controlador
const express = require('express');

const userRouter = express.Router();

 userRouter.route("/").get(getAll)

module.exports =  userRouter;