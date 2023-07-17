const express = require('express');
const router = express.Router();
const todocontroller = require('../controller/todo.controller');

router.post('/storeTodo',todocontroller.todocontroller);
router.post('/getUserTodoList',todocontroller.getUserTodo);

exports.router = router;