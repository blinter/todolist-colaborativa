const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = new Map()

app.listen(4500, () => { })

app.post('/list', (req, res) => {
  console.log(req.body)
  db.set(req.body.key, req.body)
  res.status(200).send()
  console.log(db)
})

app.get('/list/:key', (req, res) => {
  res.status(200).send(db.get(req.params.key))
})