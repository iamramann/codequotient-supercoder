const model = require("../../models/user_model");
function find_user(query) {
  return new Promise((resolve, reject) => {
    model.findOne(query, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = find_user;
