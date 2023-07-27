//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const User = require("../models/user");

router.get("/", cors(), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    boxId: req.body.boxId,
    mobile: req.body.mobile,
    area: req.body.area,
    dueAmount: req.body.dueAmount,
    lastRecharge: req.body.lastRecharge,
    status: req.body.status,
  });
  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", cors(), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    req.body.name ? (user.name = req.body.name) : null;
    req.body.boxId ? (user.boxId = req.body.boxId) : null;
    req.body.mobile ? (user.mobile = req.body.mobile) : null;
    req.body.area ? (user.area = req.body.area) : null;
    req.body.dueAmount ? (user.dueAmount = req.body.dueAmount) : null;
    req.body.lastRecharge ? (user.lastRecharge = req.body.lastRecharge) : null;
    req.body.status ? (user.status = req.body.status) : null;
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.sendStatus(204).json({
      message: "deleted",
    });
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
});

module.exports = router;
