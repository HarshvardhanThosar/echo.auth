import * as z from 'zod'

const Email = z
  .string()
  .min(5, 'Invalid email format')
  .email('Invalid email format')
  .describe('`email` is one of the crucial unique identifiers for the users.')

type Email = z.infer<typeof Email>

export default Email
