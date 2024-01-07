import { MongoClient, ServerApiVersion } from 'mongodb';

const { MONGO_URI = 'mongodb://localhost/test' } = process.env;

export const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = client.db('echo-auth');

export async function mongoConnect(): Promise<boolean> {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    await client.close();
  }
}
mongoConnect().catch(console.dir);
