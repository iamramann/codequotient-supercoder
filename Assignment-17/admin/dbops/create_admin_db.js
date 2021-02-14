const model = require("../../models/admin_model");
function admin_new_db(details) {
  return new Promise((resolve, reject) => {
    model.create(details, function (err, data) {
      if (err) {
        console.log(err);
        reject("Error");
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
}
module.exports = admin_new_db;
