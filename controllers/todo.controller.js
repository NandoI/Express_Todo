const { Todo,User } = require('../models'); // Pastikan ini sesuai dengan struktur folder dan model Anda

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
        const { title, description, userId } = req.body; // Di sini, userId akan menunjukkan pengguna yang terkait dengan Todo

        try {
            // Membuat entitas Todo baru dan menyimpannya ke dalam basis data
            const newTodo = await Todo.create({ title, description, userId });
    
            res.status(201).json({
                message: "Todo berhasil ditambahkan",
                todo: newTodo // Mengembalikan data Todo yang baru saja dibuat
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menambahkan Todo",
                error: error.message
            });
        }
    }
};
