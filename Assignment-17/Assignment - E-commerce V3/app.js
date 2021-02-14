const express = require("express");
const app = express();
module.exports = app;

//import dependencies
require("dotenv").config();
const session = require("express-session"); //
const morgan = require("morgan");
const compression = require("compression");
const uploader = require("./multer");
//import routes
const user = require("./user/user_routes");
const admin = require("./admin/admin_routes");
const cors = require("cors");

//set default view-engine
app.set("view engine", "ejs");

//middlewares
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev")); //common , combine, tiny, dev, short
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

//session-middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/user", user);
app.get(["/", "/shopping-page"], user);
//admin
app.get("/admin", admin);
app.get("/list-product", admin);
app.get("/logout", admin);
app.get("/admin-dashboard", admin);
app.get("/admin-profile", admin);
app.get("/sort-users", admin);
app.post("/create_new_admin", admin);
app.post("/admin", admin);
app.post("/change_admin_avatar", admin);
app.put("/update-admin/:id", admin);
app.put("/delete-user/:id", admin);
app.post("/list-product", admin);
app.get("/delete-product", admin);
app.put("/update-product-details/:id", admin);
app.post("/test", uploader.single("file"), function (req, res) {
  console.log(req.body);
  res.redirect("/list-product");
});
// app.get("/list-file-product", admin);
//HANDLE ANY OTHER REQUEST SEND 404
app.get("*", function (req, res) {
  res.sendStatus(404);
});
// test routes
app.get("/test", (req, res) => {
  res.send("abc").status(200);
});
