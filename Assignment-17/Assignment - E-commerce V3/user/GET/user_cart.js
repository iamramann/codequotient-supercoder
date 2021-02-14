const find_user_db = require("../dbops/find_user_db");
async function user_cart(req, res) {
  try {
    if (req.session.isUserLoggedIn) {
      const data = await find_user_db({ username: req.session.username });
      const cart = data.cart;
      if (cart.length) {
        res.render("user/cart", {
          user: data,
          products_array: cart,
        });
      } else {
        res.render("user/cart", { user: data, products_array: null });
      }
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    res.send(500);
  }
}

module.exports = user_cart;
