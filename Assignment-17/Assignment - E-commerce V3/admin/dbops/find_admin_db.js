const model = require("../../models/admin_model");
//database operation
function find_admin_profile(username) {
  return new Promise((resolve, reject) => {
    model.findOne({ username: username }, function (err, user) {
      if (err) {
        reject("Internal server error : 500");
      } else {
        resolve(user);
      }
    });
  });
}
module.exports = find_admin_profile;
