const model = require("../../models/user_model");
function find_all_users() {
  return new Promise((resolve, reject) => {
    model.find(function (err, data) {
      if (err) {
        reject("Internal server error:500");
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = find_all_users;
