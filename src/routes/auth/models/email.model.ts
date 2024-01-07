import * as z from 'zod';

export const Email = z
  .string({
    invalid_type_error: 'Please enter a valid email',
    required_error: 'Email is requried',
  })
  .min(5, 'Please enter a valid email')
  .email('Please enter a valid email')
  .describe('`email` is one of the crucial unique identifiers for the users.');

export type Email = z.infer<typeof Email>;
