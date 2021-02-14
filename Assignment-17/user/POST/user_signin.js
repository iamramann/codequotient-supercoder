const chalk = require("chalk");
const USERNAME_ERROR_MESSAGE = "invalid username**";
const PASSWORD_ERROR_MESSAGE = "invalid password**";
const ERROR_MESSAGE = "invalid username or password**";
const check_password = require("../../controllers/check_password");
const find_user_db = require("../dbops/find_user_db");

//admin login page post route and set session variables
async function user_login(req, res) {
  try {
    //get user details from the request objext
    const client_username = req.body.username;
    const client_password = req.body.password;

    //based on this query serach operation will be performed
    let query = { username: client_username };

    //get user details from the database
    let user = await find_user_db(query);
    if (user) {
      //check for username if user with given username exists only then check for password
      const db_password = user.password;
      const is_valid = await check_password(client_password, db_password);
      if (is_valid) {
        //set session variables
        req.session.isUserLoggedIn = true;
        req.session.username = client_username;
        req.session.password = client_password;
        console.log(chalk.hex("#FF8C00")(">>> Session created"));
        res.redirect("/user/home");
      } else {
        res.render("user", {
          message: null,
          password: PASSWORD_ERROR_MESSAGE,
          username: null,
        });
        // res.status(200).send(PASSWORD_ERROR_MESSAGE);
      }
    } else {
      res.render("user", {
        message: null,
        password: null,
        username: USERNAME_ERROR_MESSAGE,
      });
      // res.status(200).send(USERNAME_ERROR_MESSAGE);
    }
  } catch (err) {
    res.status(500).send(ERROR_MESSAGE);
  }
}
module.exports = user_login;
