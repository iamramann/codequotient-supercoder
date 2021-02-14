const find_user = require("../dbops/find_user_db");
const create_user_db = require("../dbops/create_user_db");
const hash_password_async = require("../../controllers/hash_password_async");
const chalk = require("chalk");
async function user_registration(req, res) {
  console.log(req.body);
  //seacrch for username, email and contact if find then say user already exist
  const query = {
    $or: [
      { email: req.body.email },
      { username: req.body.username },
      { contact: req.body.contact },
    ],
  };
  try {
    //check for user
    let data = await find_user(query);

    if (!data) {
      //means user doesn't exist
      const client_password = req.body.password;
      //hash password
      let hash = await hash_password_async(client_password);
      const details = { ...req.body };
      details.password = hash;
      let response = await create_user_db(details);
      console.log(chalk.hex("#FF8C00")(">>> New user registered"));
      res.render("user", {
        message: "registeration successful",
        username: null,
        password: null,
      });
    } else {
      console.log("user already exist");
      res.status(200).send(false);
    }
  } catch (err) {
    res.send(err);
  }
}

module.exports = user_registration;
