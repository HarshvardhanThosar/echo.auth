import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'

// R O U T E R S
import appRouter from './routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true, parameterLimit: 6 }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.json({
    message: 'System is up!'
  })
})

app.use('/api/v1', appRouter)

export default app
