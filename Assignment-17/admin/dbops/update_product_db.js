const model = require("../../models/product_model");
const uploader = require("../../multer");
function update_product_db(id, data_object) {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(id, data_object, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = update_product_db;
