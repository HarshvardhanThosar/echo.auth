import { db } from '../../../db/mongo-connect'
import { type User } from '../models'
import { CONSTANTS } from '../constants'

const UsersCollection = db.collection<User>(CONSTANTS.USERS_COLLECTION_NAME)

export default UsersCollection
