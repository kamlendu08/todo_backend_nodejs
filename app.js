const express = require('express');
const userrouter = require('./routers/user.router');
const todorouter = require('./routers/todo.router');
const morgan = require('morgan');


const app = express();
app.use(express.json());
app.use('/',userrouter.router);
app.use('/',todorouter.router);
app.use(morgan('default'));
module.exports = app;