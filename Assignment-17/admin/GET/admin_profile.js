//if session-var is true send the file otherwise access denied
const find_admin_db = require("../dbops/find_admin_db");
async function admin_profile(req, res) {
  // if (req.session.isLoggedIn) {
  try {
    const username = req.session.username;
    let user = await find_admin_db(username);
    user.password = req.session.password;
    res.render("adminv2/profile", {
      details: user,
      message: null,
    });
  } catch (err) {
    console.log("error occured");
    res.send("Something went wrong please try again");
  }
}

module.exports = admin_profile;
