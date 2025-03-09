import user from "../Models/user.js";
import task from "../Models/task.js";
import bcrypt from "bcrypt";

const add = async (req, res) => {
  try {
    const newTask = new task(req.body);
    const response = await newTask.save();
    res.json(response);
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const view = async (req, res) => {
  try {
    const response = await task.find();
    res.json(response);
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletedata = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await task.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, users.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.json({ message: "Login successful", user: { id: users._id, email: users.email } });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTask = await task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task updated successfully", task: updatedTask });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username, email, password: hashedPassword });
    const response = await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: response });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { add, view, deletedata, login, edit, register };
