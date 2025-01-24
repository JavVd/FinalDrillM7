import express from 'express'
import { UsersRouter, BootcampsRouter } from './routers/index.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/users', UsersRouter)
app.use('/bootcamps', BootcampsRouter)

app.listen(PORT, console.log(`Server is running on port ${PORT}`))