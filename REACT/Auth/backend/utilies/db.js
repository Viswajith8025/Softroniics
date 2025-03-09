import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.DB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (error) {
    console.log("error while connecting  ", error);
  }
};
export default connectDb;
