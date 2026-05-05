import express from 'express'
import hello from './hello.js'
import users from './users.js'

const app = express()
app.use(express.json())

app.all('/api/hello', hello)
app.all('/api/users', users)

app.listen(3001, () => console.log('API server on http://localhost:3001'))
