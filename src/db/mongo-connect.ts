import { MongoClient, ServerApiVersion } from 'mongodb'

const { MONGO_URI = 'mongodb://localhost/test' } = process.env

export const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const db = client.db()

export async function mongoConnect () {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    await client.close()
  }
}
mongoConnect().catch(console.dir)
