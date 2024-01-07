import * as z from 'zod';

export const Username = z
  .string()
  .min(8, 'Invalid username format')
  .describe('`username` can be used as a social identifier by other users.');

export type Username = z.infer<typeof Username>;
