const express = require('express');
const { getAllTodo, addTodo } = require('../controllers/todo.controller'); // Sesuaikan path dengan struktur folder Anda

const route = express.Router();

route.get('/', getAllTodo);
route.post('/', addTodo)

module.exports = route;
