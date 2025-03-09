import { response } from "express";
import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const initial = (req, res) => {
  res.send("Hello from initial!");
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ message: "provide data" });
    }
    const userexist = await user.findOne({ email });
    if (userexist) {
      return res.status(409).json({ message: "email already in use" });
    }
    const SALT = parseInt(process.env.SALT) || 10;
    const hashedPassword = await bcrypt.hash(password, SALT);

    await user.create({ username, email, password: hashedPassword });
    return res.status(201).json({ message: "operation success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "fill all fields" });
    }
    const userexist = await user.findOne({ email });
    if (!userexist) {
      return res.status(401).json({ message: "use a valid email" });
    }
    const passwordvalid = await bcrypt.compare(password, userexist.password);
    if (!passwordvalid) {
      return res.status(401).json({ message: "invalid password" });
    }
    const token = jwt.sign({ id: userexist._id ,  email: userexist._email },
process.env.JWT_SEC,
{expiresIn:'1h'}
    )
    

    return res.status(201).json({ message: "Login successful" ,token});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error: error.message });
  }
};
