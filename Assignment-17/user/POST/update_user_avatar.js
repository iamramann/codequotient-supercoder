const chalk = require("chalk");
const update_user_db = require("../dbops/update_user_db");
const find_user_db = require("../dbops/find_user_db");
async function user_avatar(req, res) {
  const file_destination = req.file.destination;
  const file_name = req.file.originalname;
  const index = file_destination.indexOf("uploads");
  const folder_loaction = file_destination.substring(index - 1);
  const avatar_path = folder_loaction + "/" + file_name;
  const new_avatar_path = { avatar: avatar_path };
  console.log("here");
  try {
    let user = await find_user_db({ username: req.session.username });
    await update_user_db(user.id, new_avatar_path);
    console.log(chalk.hex("#FF8C00")(">>> Admin avatar updated"));
    res.redirect("/user/profile");
  } catch (err) {
    console.log(chalk.redBright(">>> some error occured"));
    res.render("user/user_profile", {
      user_details: user,
      display: true,
    });
  }
}

module.exports = user_avatar;
