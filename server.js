const express = require('express')

const app = express()

app.get('/', function (req, res) {
      return res.json('Hello, world')
})

const PORT = process.env.PORT || 80

app.listen(PORT, '0.0.0.0', ()=> console.log(`Server is running on Port: ${PORT}`))