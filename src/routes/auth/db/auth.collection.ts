import { db } from '../../../db/mongo-connect';
import { type UserWithId } from '../models';
import { CONSTANTS } from '../constants';

const UsersCollection = db.collection<UserWithId>(
  CONSTANTS.USERS_COLLECTION_NAME,
  {},
);

export default UsersCollection;
