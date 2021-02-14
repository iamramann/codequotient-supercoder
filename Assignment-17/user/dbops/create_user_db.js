const model = require("../../models/user_model");
function create_user(userDetails) {
  return new Promise((resolve, reject) => {
    model.create(userDetails, function (err, data) {
      if (err) {
        reject("Internal server error:500");
      } else {
        resolve(data);
      }
    });
  });
}
module.exports = create_user;
