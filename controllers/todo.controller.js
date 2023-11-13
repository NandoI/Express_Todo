const { Todo } = require('../models'); // Pastikan ini sesuai dengan struktur folder dan model Anda

module.exports = {
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todo.findAll();
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
    }
};
