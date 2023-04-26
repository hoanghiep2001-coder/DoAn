const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide username and password",
    });
  }
  try {
    const user = await User.findOne({ username: username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    const accessToken = jwt.sign(
      { userID: newUser._id },
      process.env.ACCESS_TOKEN
    );

    res.json({ success: true, message: "user created successfully" }, accessToken);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
