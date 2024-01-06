import { client } from '../db/mongo-connect'

async function setupFilesAfterEnv () {
  await client.close()
}

global.afterAll(setupFilesAfterEnv)
