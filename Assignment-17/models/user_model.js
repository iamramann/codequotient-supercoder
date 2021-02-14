const { bold } = require("chalk");
const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  avatar: { type: String, default: "/uploads/user/default.png" },
  password: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  userId: { type: String, required: true },
  cart: { type: Array, required: false },
  date: { type: Date, default: Date.now(), required: false },
  status: { type: String, default: "active" },
});
mongoose.model("User", user_schema);
module.exports = mongoose.model("User");
