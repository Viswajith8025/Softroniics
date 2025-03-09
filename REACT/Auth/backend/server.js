import express from 'express'
const app=express()
import 'dotenv/config'
// require('dotenv').config()
import cors from "cors"

import authRoutes from './routes/userrouter.js';
import connectDb from './utilies/db.js';

app.use(cors())
app.use(express.json())



app.use('/auth',authRoutes)

const port=process.env.PORT||5001


connectDb().then(()=>{
    app.listen(port,()=>{
        console.log('server is running on port '+ port)
    });
    
})