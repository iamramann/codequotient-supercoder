const find_user_db = require("../dbops/find_user_db");
const update_cart = require("../dbops/update_cart");
async function increase_by_one(req, res) {
  try {
    let data = await find_user_db({ username: req.session.username });
    let cart = data.cart;
    cart.forEach(function (x, xindex) {
      if (x.pid === req.body.pid) {
        if (x.quantity > 0) {
          x.quantity++;
        }
      }
    });
    await update_cart(data._id, cart);
    res.status(200).end();
  } catch (e) {
    res.send(500);
  }
}
module.exports = increase_by_one;
