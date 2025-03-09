import mongoose from "mongoose";
let taskschema = new mongoose.Schema({
  task: {
    type: Array,
    default: [],
  },
});
const task = mongoose.model("task", taskschema); 
export default task;