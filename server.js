import express from 'express'
import { UsersRouter } from './routers/index.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use('/users', UsersRouter)

app.listen(PORT, console.log(`Server is running on port ${PORT}`))