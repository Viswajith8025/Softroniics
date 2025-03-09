import express from 'express'
import { add, deletedata, login, logindetails, update, view } from '../Controllers/usercontroller.js';

const userRouter=express.Router()

userRouter.post("/add",add);
userRouter.get("/view",view);
userRouter.put("/update/:id",update);
userRouter.delete("/delete/:id",deletedata);
userRouter.post("/login",login);
userRouter.get("/logindetails/:id",logindetails);





export default userRouter;