const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pid: {
    type: String,
    required: true,
  },
});
mongoose.model("Products", product_schema);
module.exports = mongoose.model("Products");
