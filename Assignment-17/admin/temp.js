const model = require("../models/product_model");
const fs = require("fs");
function list_file_products(req, res) {
  fs.readFile("product", "utf8", function (err, data) {
    if (err) {
      throw err;
    } else {
      var arr = JSON.parse(data);
      arr.forEach(function (x, xindex) {
        x.quantity = Math.floor(Math.random() * 50);
        model.create(x, function (err, data) {
          if (err) {
            throw err;
          } else {
            console.log(data);
          }
        });
      });
      res.sendStatus(200);
    }
  });
}

module.exports = list_file_products;
