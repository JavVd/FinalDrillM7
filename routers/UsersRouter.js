import express from 'express'
import { UsersController } from '../controllers/index.js'

const router = express.Router()

router.post('/', UsersController.createUser)
router.get('/:id', UsersController.findUserById)
router.get('/', UsersController.findAll)
router.put('/:id', UsersController.updateUserById)
router.delete('/:id', UsersController.deleteUserById)

export { router as UsersRouter }