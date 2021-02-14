const find_users_db = require("../dbops/find_users_db");
async function sorted_data(req, res) {
  try {
    let user_details = await find_users_db();

    for (var i = 0; i < user_details.length - 1; i++) {
      for (var j = 0; j < user_details.length - 1 - i; j++) {
        var val1 = user_details[j].username.toLowerCase();
        var val2 = user_details[j + 1].username.toLowerCase();
        if (val1 < val2) {
          var temp = user_details[j];
          user_details[j] = user_details[j + 1];
          user_details[j + 1] = temp;
        }
      }
    }
    res.render("adminv2/admin_dashboard", {
      user: user_details,
    });
  } catch (err) {
    res.send(err);
  }
}
module.exports = sorted_data;
