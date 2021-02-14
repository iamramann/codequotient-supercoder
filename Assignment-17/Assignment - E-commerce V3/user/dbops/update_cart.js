const model = require("../../models/user_model");
function update_cart(id, data) {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(id, { cart: data }, function (err, docs) {
      if (err) {
        reject("Internal server error : 500");
      } else {
        resolve(docs);
      }
    });
  });
}
module.exports = update_cart;
