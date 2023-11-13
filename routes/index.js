const express = require('express')
const route = express.Router()

const userRoute = require("./user.route")

route.get("/",(req,res) => {
    res.json("Halo Bos Selamat datang")
})

route.use("/users", userRoute)

module.exports = route