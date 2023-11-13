const express = require('express')
const route = express.Router()

const userRoute = require("./user.route")
const authRoute = require("./auth.route")

route.get("/",(req,res) => {
    res.json("Halo Bos Selamat datang")
})

route.use("/users", userRoute)
route.use("/users", authRoute)

module.exports = route