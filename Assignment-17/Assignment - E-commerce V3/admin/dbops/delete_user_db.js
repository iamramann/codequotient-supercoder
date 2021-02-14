const model = require("../../models/user_model.js");
function delete_user_db(user_id) {
  return new Promise((resolve, reject) => {
    model.findByIdAndDelete(user_id, function (err, docs) {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
}
module.exports = delete_user_db;
