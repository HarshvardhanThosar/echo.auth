import express from 'express'
import { login, register, sendRecoveryEmail } from './users.controllers'

const router = express.Router()

router.get('/')

router.get('/:id')

router.post('/login', login)

router.post('/register', register)

router.post('/send-recovery-email', sendRecoveryEmail)

export default router
