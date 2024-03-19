const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/canteen-token");

const User = mongoose.model("User", {
  rollno: String,
  password: String,
  email: String,
});

app.post("/signup", async (req, res) => {
  const { rollno, password, email } = req.body;
  const user = new User({ rollno, password, email });
  await user.save();
  res.send("User signed up successfully");
});

app.post("/login", async (req, res) => {
  const { rollno, password } = req.body;
  const user = await User.findOne({ rollno });

  if (!user) {
    res.status(401).send("Invalid credentials");
    return;
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (isPasswordMatch) {
    const token = jwt.sign({ rollno }, "user");
    res.send({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  jwt.verify(token, "user", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

// API endpoint to fetch user data using JWT token
app.get("/api/user", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ rollno: req.user.rollno });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
