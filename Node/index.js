import express from 'express';
import { connectdb } from './config/db.js';
import userRouter from './Routes/userroute.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
connectdb();

app.use('/user', userRouter);


app.listen(4000, () => {
  console.log("Server running on port 4000");
});
