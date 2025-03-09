import  mongoose  from "mongoose";
export const connectdb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
}
