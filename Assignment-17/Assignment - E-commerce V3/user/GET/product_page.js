const product_list_db = require("../dbops/product_list_db");

async function product_page(req, res) {
  try {
    console.log("here");
    let data = await product_list_db();
    res.render("user/products", {
      product_list: data,
      display: false,
    });
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = product_page;
