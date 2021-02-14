const model = require("../../models/product_model");
const fs = require("fs");
function list_new_product(req, res) {
  fs.readFile("product", "utf8", function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      data = JSON.parse(data);
      data.forEach(function (userDetails, index) {
        model.create(userDetails, function (err, data) {
          if (err) {
            throw err;
          } else {
            console.log("done");
          }
        });
      });
      res.sendStatus(200);
    }
  });
}

module.exports = list_new_product;
