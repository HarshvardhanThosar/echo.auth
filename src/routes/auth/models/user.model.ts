import * as z from 'zod';
import { type WithId } from 'mongodb';
import { Email } from './email.model';
import { Username } from './username.model';

export const User = z.object({
  email: Email,
  username: Username,
});

export type User = z.infer<typeof User>;

export type UserWithId = WithId<User>;
