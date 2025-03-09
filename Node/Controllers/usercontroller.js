import user from "../Models/user.js";

const add = async (req, res) => {
  try {
    const newuser = new user(req.body);
    const response = await newuser.save();
    res.json(response);
    console.log(response);
  } catch (e) {
    console.error("Error adding user:", e);
    res.status(500).json({ message: "Error adding user" });
  }
};

const view = async (req, res) => {
  try {
    const response = await user.find();
    res.json(response);
  } catch (e) {
    console.error("Error viewing users:", e);
    res.status(500).json({ message: "Error fetching users" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await user.findByIdAndUpdate(id, req.body, { new: true });
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(response);
  } catch (e) {
    console.error("Error updating user:", e);
    res.status(500).json({ message: "Error updating user" });
  }
};

const deletedata = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await user.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (e) {
    console.error("Error deleting user:", e);
    res.status(500).json({ message: "Error deleting user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await user.findOne({ email });
    if (!users) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
    if (users.password === password) {
      console.log("Login successful");
      return res.json(users);
    } else {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (e) {
    console.error("Error during login:", e);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};

const logindetails = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }
    const userDetails = await user.findById(id);
    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userDetails);
  } catch (e) {
    console.error("Error fetching user details:", e);
    res.status(500).json({ message: "An error occurred while fetching user details" });
  }
};


export { add, view, update, deletedata, login, logindetails };
