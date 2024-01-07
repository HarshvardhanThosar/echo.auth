import { mongoConnect } from '../../db/mongo-connect';

/**
 * Script to check system health
 * @param recheck boolean
 * @returns health data
 */
export async function healthChecker(recheck = false): Promise<T> {
  const mongoConnectionStatus: boolean = await mongoConnect();
  return {
    'mongo-connection': {
      code: 200,
      active: mongoConnectionStatus,
      message: 'Mongo connection active',
    },
    'local-storage': mongoConnectionStatus,
    's3-storage': mongoConnectionStatus,
  };
}
