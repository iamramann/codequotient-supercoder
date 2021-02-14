//if admin is already logged in just go to admin control panel
function admin_login_view(req, res) {
  if (req.session.isLoggedIn) {
    res.redirect("/list_product");
  } else {
    res.render("adminv2/login", {
      message: null,
    });
  }
}
module.exports = admin_login_view;
