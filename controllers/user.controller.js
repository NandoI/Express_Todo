const { User } = require("../models");

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json({ message: "Berhasil mendapatkan data", data: users });
        } catch (error) {
            res.status(500).json({ message: "Gagal mendapatkan data", error: error.message });
        }
    },

    addUser: async (req, res) => {
        try {
            let data = req.body;
            const newUser = await User.create(data);
            
            if(newUser) {
                res.json({ message: "berhasil membuat data todo", data: newUser });
            } else {
                throw new Error("Gagal membuat data todo");
            }
        } catch (error) {
            res.status(500).json({ message: "Gagal menambahkan data", error: error.message });
        }
    },

    deletUser: async (req, res) => {
        try {
            const userID = req.params.id;

            const users = await User.findByPk(userID);

            if(!users) {
                return res.status(404).json(
                    {
                        message: "user tidak ditemukan"
                    }
                )
            }

            await users.destroy()

            res.json({
                message: "user berhasil dihapus"
            })

        } catch (error) {
            res.status(500).json(
                {
                    message: 'gagal menghapus user',
                    error: error.message
                }
            )
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const userData = req.body;

            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: "User tidak ditemukan"
                });
            }

            await user.update(userData);

            res.json({
                message: "Data user berhasil diupdate",
                data: user
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mengupdate data user',
                error: error.message
            });
        }
    },
};
