const list_product_db = require("../dbops/list_product_db");
async function list_new_product(req, res) {
  try {
    const productDetails = { ...req.body };
    let data = await list_product_db(productDetails);
    res.redirect("/list-product");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
module.exports = list_new_product;
