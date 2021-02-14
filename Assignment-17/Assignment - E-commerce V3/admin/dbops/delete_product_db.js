const { model } = require("mongoose");
var models = require("../../models/product_model");
function delete_product_db(id) {
  return new Promise((resolve, reject) => {
    models.findByIdAndDelete(id, function (err, data) {
      if (err) {
        reject(err);
      } else {
        console.log("done");
        resolve(data);
      }
    });
  });
}
module.exports = delete_product_db;
