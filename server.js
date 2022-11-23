import express from 'express'
import session from 'express-session'
import router from './api/router.js'
import bodyParser from 'body-parser'
import database from './database.js'
import cors from 'cors'
import * as dotenv from 'dotenv'

const app = express()
const port = 3000

dotenv.config()

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

database.connect()

app.use(cors())

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})