const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boxId: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  area: {
    type: String,
    required: false,
  },
  dueAmount: {
    type: String,
    required: false,
  },
  lastRecharge: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
