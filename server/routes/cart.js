const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Cart = require("../models/Cart");

router.post("/", verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  try {
    const newCart = new Cart({
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "onBoard",
      user: req.userId,
    });

    await newCart.save();

    res.json({ success: true, message: "This is your cart!", cart: newCart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal server " });
  }
});

router.get('/', verifyToken, async (req, res) => {
    try {
        const carts = await Cart.find({ user: req.userId }).populate('user', ['username']);
        res.json({success: true, carts}) 
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Internal server " });
    }
})

module.exports = router;
