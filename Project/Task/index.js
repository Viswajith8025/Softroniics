import express from "express";
import { connectDB } from "./Config/db.js";
import taskRouter from "./Routes/taskroute.js";
import userRouter from "./Routes/userroute.js";

import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
connectDB();
app.use("/task", taskRouter);
app.use("/user", userRouter); 
app.listen(8000, () => {
  console.log("running");
});
