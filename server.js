import express from 'express'
import router from './api/router.js'
import bodyParser from 'body-parser'
import database from './database.js'

const app = express()
const port = 3000

database.connect()

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})