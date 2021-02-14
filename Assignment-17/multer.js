const multer = require("multer");
//config multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.url === "/change_admin_avatar") {
      cb(null, __dirname + "/public/uploads/admin");
    } else if (req.url === "/list-product") {
      console.log(req.url);
      cb(null, __dirname + "/public/uploads/products");
    } else if (req.url === "/update_user_avatar") {
      console.log(req.url);
      cb(null, __dirname + "/public/uploads/user");
    } else if (req.url === "/test") {
      cb(null, __dirname + "/public/uploads/products");
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploader = multer({ storage: storage });
module.exports = uploader;
