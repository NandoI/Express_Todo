const express = require('express');
const { getAllTodo } = require('../controllers/todo.controller'); // Sesuaikan path dengan struktur folder Anda

const route = express.Router();

route.get('/', getAllTodo);

module.exports = route;
