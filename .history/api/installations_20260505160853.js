import clientPromise from './_lib/mongo';

export default async function handler(req, res){
    try {
        const client = await clientPromise
        const db = client.db('awDB')
        const users = db.collection('users')
        
        if(req.method === 'GET')
    }
}