import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
	// Tune these for serverless
	maxPoolSize: 10,
	minPoolSize: 0,
	serverSelectionTimeoutMS: 5000,
}

if (!uri) {
	throw new Error('Missing MONGODB_URI environment variable')
}

let client
let clientPromise

// Cache the connection across invocations.
// In serverless, the module-level scope persists between
// "warm" invocations on the same instance.
if (!global._mongoClientPromise) {
	client = new MongoClient(uri, options)
	global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise
