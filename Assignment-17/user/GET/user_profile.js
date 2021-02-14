const find_user = require("../dbops/find_user_db");
async function user_profile(req, res) {
  let data = await find_user({ username: req.session.username });
  data.password = req.session.password;
  res.render("user/user_profile", {
    user_details: data,
    display: true,
  });
}
module.exports = user_profile;
