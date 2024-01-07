import { client } from '../../db/mongo-connect';

async function setupFilesAfterEnv(): Promise<void> {
  await client.close();
}

global.afterAll(setupFilesAfterEnv);
