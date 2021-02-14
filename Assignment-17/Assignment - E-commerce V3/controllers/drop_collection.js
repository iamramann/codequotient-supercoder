const mongoose = require("../db");
function drop_collection(collection_name) {
  collection_name += "s";
  const connection = mongoose.connection;
  connection.once("open", function () {
    connection.db.listCollections().toArray(function (err, names) {
      if (err) {
        throw err;
      } else {
        mongoose.connection.db.dropCollection(
          collection_name,
          function (err, result) {
            if (err) {
              throw err;
            } else {
              console.log("collection dropped");
              connection.close();
            }
          }
        );
      }
    });
  });
}
module.exports = drop_collection;
