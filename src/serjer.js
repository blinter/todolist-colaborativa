const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('www'))

app.listen(4500, () => {
  console.log(`Example app listening`)
})

app.get('/list', async (req, res) => {
  res.status(200).send()
})