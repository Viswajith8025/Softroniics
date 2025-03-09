import express from "express";
import { login, register } from "../Controllers/usercontroller.js";
import { upload } from "../multer.js";
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);


export default userRouter;
