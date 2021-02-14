const mongoose = require("mongoose");
const admin_schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  designation: { type: String, default: "admin" },
  dob: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  cqkartid: { type: String, required: true },
  avatar: { type: String, required: true },
});

mongoose.model("Admin", admin_schema);
module.exports = mongoose.model("Admin");
