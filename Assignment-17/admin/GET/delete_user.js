const delete_user_db = require("../dbops/delete_user_db");
const find_users_db = require("../dbops/find_users_db");

const chalk = require("chalk");
async function delete_user(req, res) {
  const id = req.params.id;
  try {
    let docs = await delete_user_db(id);
    console.log(chalk.hex("#FF0 000")(">>> user profile deleted"));
    let user_details = await find_users_db();
    res.render("adminv2/admin_dashboard", {
      user: user_details,
    });
  } catch (err) {
    console.log("error occured");
    res.sendStatus(500);
  }
}

module.exports = delete_user;
