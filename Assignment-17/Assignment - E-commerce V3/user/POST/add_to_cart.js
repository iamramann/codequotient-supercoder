const find_user_db = require("../dbops/find_user_db");
const update_cart = require("../dbops/update_cart");
async function add_to_cart(req, res) {
  try {
    req.body.discounted_price = req.body.price - (req.body.price * 30) / 100;
    const data = await find_user_db({ username: req.session.username });
    const cart = data.cart;
    var isExisted = false;
    // if cart is empty thena add a product to the cart
    if (!cart.length) {
      cart.push(req.body);
    } else {
      cart.forEach(function (x, xindex) {
        if (x.pid === req.body.pid) {
          // if pid matched it means product is in the cart then just increase the quantity and set the flag
          isExisted = true;
          x.quantity++;
        }
      });

      //if flag is not set it means the pid is not exist then add new product
      if (!isExisted) {
        cart.push(req.body);
      }
    }
    // update values in the cart
    await update_cart(data._id, cart);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.send(500);
  }
}
module.exports = add_to_cart;
