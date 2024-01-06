import express from 'express'

// R O U T E R S
import authRouter from './auth/auth.routes'
import usersRouter from './users/users.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', usersRouter)

export default router
