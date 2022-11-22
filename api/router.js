// examples of routes uses
import express from 'express'
import users from './users/router.js'
import auth from './auth/router.js'
// import articles from './articles/router.js'

const router = express.Router()

router.use('/users', users)
router.use('/', auth)
// router.use('/articles', articles)

export default router