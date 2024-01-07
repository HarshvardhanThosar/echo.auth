import * as z from 'zod';

export const Password = z
  .string()
  .min(8, 'Invalid password format')
  .describe(
    '`password`, usually, along with `email` is one of the crucial pair of paramters to authenticate users.',
  );

export type Password = z.infer<typeof Password>;
