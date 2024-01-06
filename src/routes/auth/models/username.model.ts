import * as z from 'zod'

const Username = z
  .string()
  .min(8, 'Invalid username format')
  .describe('`username` can be used as a social identifier by other users.')

type Username = z.infer<typeof Username>

export default Username
