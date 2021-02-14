const mongoose = require("mongoose");
module.exports = mongoose;
const drop_collection = require("./controllers/drop_collection");
const url =
  "mongodb://5f6c411a9a5ba507a8ea5402:c22osqlokird778rc22osqlokird778s@128.199.17.119:3002/c22osqlokird778m?authSource=admin";
const object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(url, object, function (err) {
  if (err) {
    throw err;
  }
  console.log(">>> Connected to database");
});

// drop_collection("");
