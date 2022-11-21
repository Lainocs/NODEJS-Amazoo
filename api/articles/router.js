// example classic router
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Article page')
})

export default router