// example of router using controller's functions
import express from 'express'
import userController from './controller.js'

const router = express.Router()

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router