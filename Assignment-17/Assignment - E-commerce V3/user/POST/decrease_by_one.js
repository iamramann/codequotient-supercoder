const find_user_db = require("../dbops/find_user_db");
const update_cart = require("../dbops/update_cart");
async function decrease_by_one(req, res) {
  try {
    let data = await find_user_db({ username: req.session.username });
    let cart = data.cart;
    cart.forEach(function (x, xindex) {
      if (x.pid === req.body.pid) {
        if (parseInt(x.quantity) === 1) {
          cart.splice(xindex, 1);
        }

        if (x.quantity > 1) {
          x.quantity--;
        }
      }
    });
    await update_cart(data._id, cart);
    res.status(200).end();
  } catch (e) {
    res.send(500);
  }
}
module.exports = decrease_by_one;
