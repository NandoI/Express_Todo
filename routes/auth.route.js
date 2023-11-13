const express = require('express')
const route = express.Router()

route.post('/login', () => {

})

route.post('/regis', (req,res) => {
    let data = req.body

    console.log(data)
})

module.exports = route