import clientPromise from './_lib/mongo';

export default async function handler(req, res){
    try {
        const client = await clientPromise
        const db = client.db('awDB')
        const installations = db.collection('installations')
        
        if(req.method === 'GET'){
            const art = await installations.find({}).limit(50).toArray()
            console.log('users')
        }
    }
}