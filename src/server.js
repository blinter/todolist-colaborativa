const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const listPersistence = require('./ListPersistence')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(4500, () => { })

app.post('/list', (req, res) => {
  listPersistence.insert(req.body)
  res.status(200).send()
})

app.put('/list', async (req, res) => {
  let result = await listPersistence.update(req.body)
  res.status(200).send(result)
})

app.get('/list/', async (req, res) => {
  let results = await listPersistence.list()
  res.status(200).send(results)
})

app.get('/list/key/:key', async (req, res) => {
  let list = await listPersistence.searchByKey(req.params.key)
  res.status(200).send(list)
})

app.delete('/list/:_id', async (req, res) => {
  let list = await listPersistence.delete(req.params._id)
  res.status(200).send(list)
})