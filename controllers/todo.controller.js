const { Todo,User } = require('../models');

module.exports = {
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todo.findAll({
                include: User
            });
            res.status(200).json({
                message: "Berhasil mendapatkan todo",
                data: todos
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan data",
                error: error.message
            });
        }
    },

    addTodo: async (req,res) => {
        const { title, description, userId } = req.body;

        try {
            const newTodo = await Todo.create({ title, description, userId });
    
            res.status(201).json({
                message: "Todo berhasil ditambahkan",
                todo: newTodo
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menambahkan Todo",
                error: error.message
            });
        }
    },

    deleteTodo: async (req, res) => {
        try {
        
        const todosId = req.params.id;
        const todos = await Todo.findByPk(todosId)

        if(!todos) {
            return res.status(404).json(
                {
                    message: "todo tidak ditemukan"
                }
            )
        }

        await todos.destroy()
        res.json({
            message:"todo berhasil dihapus"
        })
        } catch (error) {
            res.status(500).json(
                {
                    message: 'gagal menghapus todos',
                    error:error.message
                }
            )
            
        }
    },

    getTodoById: async (req, res) => {
        try {
            const todoId = req.params.id;
            const todo = await Todo.findByPk(todoId, { include: User });

            if (!todo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            res.json({
                message: "Berhasil mendapatkan data todo",
                data: todo
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mendapatkan data todo',
                error: error.message
            });
        }
    },

    updateTodo: async (req, res) => {
        try {
            const todoId = req.params.id;
            const todoData = req.body;

            const todo = await Todo.findByPk(todoId);

            if (!todo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            await todo.update(todoData);

            res.json({
                message: "Data todo berhasil diupdate",
                data: todo
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mengupdate data todo',
                error: error.message
            });
        }
    },

};
