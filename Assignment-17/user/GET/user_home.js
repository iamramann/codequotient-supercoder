const product_list_db = require("../dbops/product_list_db");
const find_user_db = require("../dbops/find_user_db");
async function user_home(req, res) {
  try {
    console.log("here");
    let data = await product_list_db();
    let user = await find_user_db({ username: req.session.username });
    if (req.session.isUserLoggedIn) {
      res.render("user/products", {
        product_list: data,
        user: user,
        display: true,
      });
    } else {
      res.render("user/products", {
        product_list: data,
        user: user,
        display: false,
      });
    }
  } catch (err) {
    res.sendStatus(500);
  }
}
module.exports = user_home;
