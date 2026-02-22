import express from 'express'
import { formclientRouter } from './Formclient/infrastructure/http/index.js' 
import { registerformrouter } from './Registerform/infrastructure/http/index.js' 
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/formclient', formclientRouter)
app.use('/registerusers', registerformrouter )


app.listen(4000,()=> console.log('Server on'))