const product_list_db = require("../dbops/product_list_db");
// async function product_list(req, res) {
//   try {
//     let products = await product_list_db();
//     res.status(200).send(products);
//   } catch (e) {
//     res.sendStatus(500);
//   }
// }
async function product_list(req, res) {
  try {
    let products = await product_list_db();
    // console.log(products);
    res.render("user/bs-product", { product_list: products });
  } catch (e) {
    res.sendStatus(500);
  }
}
module.exports = product_list;

