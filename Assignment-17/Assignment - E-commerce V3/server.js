//import dependencies
require("dotenv").config();
const chalk = require("chalk");
const PORT = process.env.PORT || 5000;
const app = require("./app");
const db = require("./db");

//start the sever on specified port
app.listen(PORT, function () {
  console.log(chalk.magentaBright(`>>> Server is running on port ${PORT}`));
});
