const update_product_db = require("../dbops/update_product_db");
async function product_update(req, res) {
  try {
    console.log(req.body);
    var data_object = { ...req.body };
    data_object.quantity = req.body.quantity;
    const id = req.params.id;
    let data = await update_product_db(id, data_object);
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
module.exports = product_update;
