const model = require("../../models/user_model");
function find_user_by_id_and_update(id, data) {
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
module.exports = find_user_by_id_and_update;
