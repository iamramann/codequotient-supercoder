const model = require("../../models/product_model");
function list_product_db(productDetails) {
  return new Promise((resolve, reject) => {
    model.create(productDetails, function (err, data) {
      if (err) {
        reject("Internal server error:500");
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = list_product_db;
