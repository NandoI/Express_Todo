const express = require('express');
const { getAllTodo, addTodo, deleteTodo, getTodoById, updateTodo } = require('../controllers/todo.controller'); // Sesuaikan path dengan struktur folder Anda

const route = express.Router();

route.get('/', getAllTodo);
route.post('/', addTodo);
route.delete('/:id', deleteTodo)
route.get('/:id', getTodoById)
route.put('/:id', updateTodo)

module.exports = route;
