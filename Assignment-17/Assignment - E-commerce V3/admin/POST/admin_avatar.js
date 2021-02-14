const chalk = require("chalk");
const update_admin_db = require("../dbops/update_admin_db");
const find_admin_db = require("../dbops/find_admin_db");
async function admin_avatar(req, res) {
  const file_destination = req.file.destination;
  const file_name = req.file.originalname;
  const index = file_destination.indexOf("uploads");
  const folder_loaction = file_destination.substring(index - 1);
  const avatar_path = folder_loaction + "/" + file_name;
  const new_avatar_path = { avatar: avatar_path };
  try {
    let user = await find_admin_db(req.session.username);
    await update_admin_db(user.id, new_avatar_path);
    console.log(chalk.hex("#FF8C00")(">>> Admin avatar updated"));
    res.redirect("/admin-profile");
  } catch (err) {
    console.log(chalk.redBright(">>> some error occured"));
    res.render("admin/admin_profile", {
      details: user,
      message: "some error occured, please try again",
    });
  }
}

module.exports = admin_avatar;
