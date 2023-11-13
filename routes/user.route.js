const express = require('express')
const { getAllUser, addUser, deletUser, updateUser } = require('../controllers/user.controller')

const route = express.Router()

route.get("/", getAllUser)
route.post("/", addUser)
route.delete("/:id", deletUser)
route.put("/:id", updateUser)

module.exports = route