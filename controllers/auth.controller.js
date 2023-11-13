const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {
    regis: async (req, res) => {
        try {
            let data = req.body;
            console.log(data);

            let saltRounds = 10;
            let hashPassword = await bcrypt.hash(data.password, saltRounds);

            data.password = hashPassword;
            
            const newUser = await User.create(data);

            res.json({ message: "Berhasil menambahkan data", data: newUser });
        } catch (error) {
            res.status(500).json({ message: "Gagal menambahkan data", error: error.message });
        }
    },

    login: async (req,res) => {
        try {
            let data = req.body;

            const user = await User.findOne({ where: { email: data.email } });

            if (!user) {
                return res.json({ message: "Pengguna tidak terdaftar" });
            }
            const passwordMatch = await bcrypt.compare(data.password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({
                    email: data.email
                },"adnfjasnefanejnjn")
                res.json({ message: "Berhasil login",token });
            } else {
                res.json({ message: "Kombinasi email dan password salah" });
            }
        } catch (error) {
            res.status(500).json({ message: "Gagal login", error: error.message });
        }
    }
};
