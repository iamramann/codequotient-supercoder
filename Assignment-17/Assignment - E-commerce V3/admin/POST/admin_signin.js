const chalk = require("chalk");
const USERNAME_ERROR_MESSAGE = "invalid username**";
const PASSWORD_ERROR_MESSAGE = "invalid password**";
const check_password = require("../../controllers/check_password");
const find_admin_db = require("../dbops/find_admin_db");

//admin login page post route and set session variables
async function admin_login(req, res) {
  try {
    const client_username = req.body.username;
    const client_password = req.body.password;

    //get admin details from the database
    let user = await find_admin_db(client_username);

    if (user) {
      //if user exists then check for password
      const db_password = user.password;

      //compare password returns true if matched else false
      const is_valid = await check_password(client_password, db_password);
      if (is_valid) {
        req.session.isLoggedIn = true;
        req.session.username = req.body.username; //need username to find the record based on username
        req.session.password = req.body.password; //need password to display non-hashed password on the profile section
        console.log(chalk.hex("#FF8C00")(">>> Session created"));
        res.redirect("/list-product");
      } else {
        //send invalid password message
        res.render("adminv2/login", {
          message: PASSWORD_ERROR_MESSAGE,
        });
      }
    } else {
      //send invalid username messsage
      res.render("adminv2/login", {
        message: USERNAME_ERROR_MESSAGE,
      });
    }
  } catch (err) {
    console.log("error occured");
    //handle internal error here
    res.render("adminv2/login", {
      message: null,
    });
  }
}

module.exports = admin_login;
