import express from 'express'
import { BootcampController } from '../controllers/index.js'

const router = express.Router()

router.post('/', BootcampController.createBootcamp)
router.post('/add-user', BootcampController.addUser)
router.get('/:id', BootcampController.findById)
router.get('/', BootcampController.findAll)

export { router as BootcampsRouter }