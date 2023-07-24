const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boxId: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
