const model = require("../../models/product_model");
function get_product_list() {
  return new Promise((resolve, reject) => {
    model.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = get_product_list;
