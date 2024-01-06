import * as z from 'zod'
import Email from './email.model'
import Password from './password.model'

const LoginForm = z.object({
  email: Email,
  password: Password
})

type LoginForm = z.infer<typeof LoginForm>

export default LoginForm
