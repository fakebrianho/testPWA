import { ObjectId } from 'mongodb'
import clientPromise from '../_lib/mongodb.js'

export default async function handler(req, res) {
	const { id } = req.query

	if (!ObjectId.isValid(id)) {
		return res.status(400).json({ error: 'Invalid id' })
	}

	try {
		const client = await clientPromise
		const users = client.db('myapp').collection('users')
		const user = await users.findOne({ _id: new ObjectId(id) })

		if (!user) return res.status(404).json({ error: 'Not found' })
		return res.status(200).json(user)
	} catch (err) {
		console.error(err)
		return res.status(500).json({ error: 'Internal server error' })
	}
}
