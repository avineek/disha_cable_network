//import libraries
const express = require("express");
const router = express.Router();
//handle shcema
const Transaction = require("../models/transaction");

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const transactions = await Transaction.findById(req.params.id);
    res.json(transactions);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", async (req, res) => {
  const transactions = new Transaction({
    name: req.body.name,
    boxId: req.body.boxId,
    date_time: req.body.date_time,
    amount: req.body.amount,
    userId: req.body.userId,
  });
  try {
    const t1 = await transactions.save();
    res.json(t1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const transactions = await Transaction.findById(req.params.id);
    req.body.name ? (transactions.name = req.body.name) : null;
    req.body.boxId ? (transactions.boxId = req.body.boxId) : null;
    req.body.date_time ? (transactions.date_time = req.body.date_time) : null;
    req.body.amount ? (transactions.amount = req.body.amount) : null;
    req.body.userId ? (transactions.userId = req.body.userId) : null;
    const t1 = await transactions.save();
    res.json(t1);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const transactions = await Transaction.deleteOne({ _id: req.params.id });
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
