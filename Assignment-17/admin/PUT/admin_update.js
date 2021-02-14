// const rw = require("../../controllers/rw");
const chalk = require("chalk");
const hash_password_async = require("../../controllers/hash_password_async");
const update_admin_db = require("../dbops/update_admin_db");
async function admin_update(req, res) {
  const id = req.params.id;
  const new_details = {
    username: req.body.username.trim(),
    mobile: req.body.mobile,
    email: req.body.email.trim(),
  };

  //if session password and password from request are not same then hash the new password -> save hashed password in the database and update session password value
  if (!(req.session.password === req.body.password)) {
    let hash = await hash_password_async(req.body.password);
    new_details.password = hash;
    req.session.password = req.body.password;
  }
  //i am trying to find admin details using username stored in session variable and if user modifies username then it is must to modify the session variable username as well..
  req.session.username = req.body.username;
  try {
    let docs = await update_admin_db(id, new_details);
    console.log(chalk.hex("#FF8C00")(">>> Admin details updated"));
    res.render("adminv2/profile", {
      details: docs,
      message: null,
    });
  } catch (err) {
    console.log(chalk.redBright(">>> some error occured"));
    res.render("adminv2/profile", {
      details: docs,
      message: "some error occured, please try again",
    });
  }
}
module.exports = admin_update;
