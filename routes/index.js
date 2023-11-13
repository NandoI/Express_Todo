const express = require('express')
const route = express.Router()

const userRoute = require("./user.route")
const todosRoute = require("./todo.route")
const authRoute = require('./auth.route')

route.get("/",(req,res) => {
    res.json("Halo Bos Selamat datang")
})

route.use("/users", userRoute)
route.use("/todos", todosRoute)
route.use("/auth", authRoute)

module.exports = route