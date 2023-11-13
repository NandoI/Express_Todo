const express = require('express')
const { getAllUser, addUser, deletUser } = require('../controllers/user.controller')

const route = express.Router()

route.get("/", getAllUser)
route.post("/", addUser)
route.delete("/:id", deletUser)

module.exports = route