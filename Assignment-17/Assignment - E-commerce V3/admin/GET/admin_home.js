const find_users_db = require("../dbops/find_users_db");
const get_product_list = require("../dbops/get_product_list");

async function admin_home(req, res) {
  try {
    let product_list = await get_product_list();
    res.render("adminv2/admin_home", {
      product_list: product_list,
    });
  } catch (err) {
    res.send(err);
  }
}

module.exports = admin_home;
