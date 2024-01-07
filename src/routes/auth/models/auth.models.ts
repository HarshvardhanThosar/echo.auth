import * as z from 'zod';
import { Email } from './email.model';
import { Password } from './password.model';

export const LoginForm = z.object({
  email: Email,
  password: Password,
});

export type LoginForm = z.infer<typeof LoginForm>;
