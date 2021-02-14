const express = require("express");
const router = express.Router();
module.exports = router;

//multer configuration
const uploader = require("../multer");

//middlewares
const {
  authenticate_user,
  disable_page_caching,
  paginatedResults,
} = require("./middleware");

// controllers
const admin_login = require("./GET/admin_login");
const admin_logout = require("./GET/admin_logout");
const admin_home = require("./GET/admin_home");
const admin_profile = require("./GET/admin_profile");
const dashboard = require("./GET/admin_dashboard");
const admin_signup = require("./POST/admin_signup");
const admin_signin = require("./POST/admin_signin");
const admin_avatar = require("./POST/admin_avatar");
const admin_update = require("./PUT/admin_update");
const sorted_data = require("./GET/sorted_data");
const delete_user = require("./GET/delete_user");
const delete_product = require("./GET/delete_product");
const list_new_product = require("./POST/list_new_product");
const product_update = require("./PUT/product_update");
// const list_file_product = require("./temp");
//routes handling
router.get("/admin", admin_login);
router.get("/delete-product", delete_product);
router.post("/create_new_admin", admin_signup);
router.post("/admin", admin_signin);
router.post("/change_admin_avatar", uploader.single("file"), admin_avatar);
router.put("/update-admin/:id", admin_update);
router.put("/delete-user/:id", delete_user);
router.post("/list-product", uploader.single("file"), list_new_product);
router.put("/update-product-details/:id", product_update);
// router.get("/list-file-product", list_file_product);
//protected routes
router.get(
  "/list-product",
  authenticate_user,
  disable_page_caching,
  admin_home
);
router.get(
  "/admin-dashboard",
  authenticate_user,
  disable_page_caching,
  dashboard
);
router.get("/logout", authenticate_user, disable_page_caching, admin_logout);
router.get(
  "/admin-profile",
  authenticate_user,
  disable_page_caching,
  admin_profile
);

router.get("/sort-users", sorted_data);

//test routes
// const users = [
//   { id: 1, name: "abc" },
//   { id: 2, name: "abc" },
//   { id: 3, name: "abc" },
//   { id: 4, name: "abc" },
//   { id: 5, name: "abc" },
//   { id: 6, name: "abc" },
//   { id: 7, name: "abc" },
//   { id: 8, name: "abc" },
//   { id: 9, name: "abc" },
//   { id: 10, name: "abc" },
// ];

// router.get("/temp1", paginatedResults(users), function (req, res) {
//   res.send(res.results);
// });
