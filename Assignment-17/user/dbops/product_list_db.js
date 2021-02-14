const model = require("../../models/product_model");
function product_list_db() {
  return new Promise((resolve, reject) => {
    model.find(function (err, data) {
      if (err) {
        reject("Internal server error : 500");
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = product_list_db;
