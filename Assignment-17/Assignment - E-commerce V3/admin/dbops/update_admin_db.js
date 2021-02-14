const model = require("../../models/admin_model");
function find_admin_by_id_and_update(id, data) {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(id, data, function (err, docs) {
      if (err) {
        reject("Internal server error : 500");
      } else {
        resolve(docs);
      }
    });
  });
}
module.exports = find_admin_by_id_and_update;
