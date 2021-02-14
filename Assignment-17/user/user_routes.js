const express = require("express");
const router = express.Router();
module.exports = router;
const uploader = require("../multer");

//controllers
const user_signup = require("./POST/user_signup");
const user_signin = require("./POST/user_signin");
const delete_product = require("./POST/delete_product");
const increase_by_one = require("./POST/increase_by_one");
const decrease_by_one = require("./POST/decrease_by_one");
const add_to_cart = require("./POST/add_to_cart");
const user_home = require("./GET/user_home");
const user_logout = require("./GET/user_logout");
const user_cart = require("./GET/user_cart");
const product_list = require("./GET/product_list");
const list_new_product = require("./GET/list_new_product");
const user_profile = require("./GET/user_profile");
const user_update = require("./PUT/user_update");
const update_user_avatar = require("./POST/update_user_avatar");
const product_page = require("./GET/product_page");
//middlewares
const {
  authenticate_user,
  disable_page_caching,
  paginatedResults,
} = require("./middleware");

// GET
router.get(["/login", "/signup"], function (req, res) {
  res.render("user", {
    message: null,
    username: null,
    password: null,
  });
});
router.get(["/", "/shopping-page"], product_page);
router.get("/home", disable_page_caching, authenticate_user, user_home);
router.get("/logout", authenticate_user, user_logout);
router.get("/cart", disable_page_caching, authenticate_user, user_cart);
router.get("/profile", disable_page_caching, authenticate_user, user_profile);
router.get("/prod", product_list);
router.get("/bs", product_list);
// POST
router.post("/signup", user_signup);
router.post("/login", user_signin);
router.post("/add-to-cart", add_to_cart);
router.post("/delete_product", delete_product);
router.post("/increase-by-one", increase_by_one);
router.post("/decrease-by-one", decrease_by_one);

//other
router.get("/list-new-product", list_new_product);
router.get("/product-list", product_list);

router.put("/update_user/:id", user_update);
router.post("/update_user_avatar", uploader.single("file"), update_user_avatar);
