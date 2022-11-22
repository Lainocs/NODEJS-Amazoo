import express from 'express'
import router from './api/router.js'
import bodyParser from 'body-parser'
import database from './database.js'
import cors from 'cors'

const app = express()
const port = 3000

database.connect()

app.use(cors())

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})