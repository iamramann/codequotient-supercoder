const find_users_db = require("../dbops/find_users_db");
async function dashboard(req, res) {
  try {
    let user_details = await find_users_db();
    res.render("adminv2/admin_dashboard", {
      user: user_details,
    });
  } catch (err) {
    console.log("collection not found");
    res.send(err);
  }
}
module.exports = dashboard;
