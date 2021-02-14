const hash_password_async = require("../../controllers/hash_password_async");
const ERROR_MESSAGE = "Internal server error:500";
const create_admin_db = require("../dbops/create_admin_db");
const chalk = require("chalk");
async function create_new_admin(req, res) {
  try {
    const client_password = req.body.password;
    let hash = await hash_password_async(client_password);
    const admin_details = { ...req.body };
    admin_details.password = hash;
    let data = await create_admin_db(admin_details);
    console.log(chalk.hex("#FF8C00")(">>> new admin registered"));
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send(ERROR_MESSAGE);
  }
}

module.exports = create_new_admin;
