import express from 'express'
import { add, deletedata, edit, login, register, view } from '../Controllers/usercontroller.js'
import addimage from '../Controllers/imagecontroller.js';
import { upload } from '../multer.js';
const taskRouter=express.Router()
taskRouter.post("/add",add);
taskRouter.get("/view",view);
taskRouter.put("/edit/:id", edit);
taskRouter.delete("/delete/:id",deletedata);
taskRouter.post("/addimage", upload.single("image"),addimage);


export default taskRouter;  