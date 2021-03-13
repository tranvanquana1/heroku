const express = require('express')

const app = express()

app.get('/', function (req, res) {
      return res.json('Hello, world')
})

app.listen(3000, ()=> console.log('Server is running on Port: 3000'))