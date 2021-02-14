const delete_product_db = require("../dbops/delete_product_db");
const chalk = require("chalk");
async function delete_product(req, res) {
  try {
    const id = req.query.id;
    let data = await delete_product_db(id);
    if (data) {
      res.redirect("/list-product");
    } else {
      res.redirect("/list-product");
    }
  } catch (err) {
    console.log("error occured");
    res.send(err);
  }
}
module.exports = delete_product;
