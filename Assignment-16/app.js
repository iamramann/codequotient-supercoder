const http = require("http");
const fs = require("fs");
const chalk = require("chalk");
const PORT = 8000 || 6000;

const type = {
  html: { "Content-type": "text/html" },
  js: { "Content-type": "text/javascript" },
  css: { "Content-type": "text/css" },
};
http.createServer(requestHandler).listen(PORT);
console.log(chalk.white(`** server is running at ${PORT} **`));

//FUNCTIONS DEFINATIONS ARE HERE

/*requestHandler function is our utility method to read html,css,js files and send approppriate response from server to the client*/
function requestHandler(req, res) {
  const url = req.url;
  console.log(chalk.yellow(url));
  const method = req.method;

  if (method === "GET") {
    if (url === "/") {
      custom_readFile("./index.min.html", type.html, res);
    } else if (url === "/read_tasks") {
      read_data_from_storage(function (data_from_storage) {
        res.end(JSON.stringify(data_from_storage));
        console.log(chalk.blue(">>> All task read"));
      });
    } else {
      //extract extension from incoming url
      var index = url.lastIndexOf(".");
      var extension_type = url.substring(index + 1);

      //extract file name form incoming url
      var lastIndex = url.indexOf("/");
      var extract_file_name = url.substring(lastIndex + 1);

      //handle routes using extension name
      if (extension_type === "html") {
        custom_readFile(extract_file_name, type.html, res);
      } else if (extension_type === "css") {
        custom_readFile(extract_file_name, type.css, res);
      } else if (extension_type === "js") {
        custom_readFile(extract_file_name, type.js, res);
      } else {
        res.end();
      }
    }
  } else if (method === "POST") {
    if (url === "/add_new_task") {
      readJSONBody(req, function (data) {
        console.log(data);
        create_new_task(data, function () {
          console.log(chalk.hex("#00a86b")(">>> New Task Created"));
          res.end();
        });
      });
    } else if (url === "/delete_task") {
      readNonJSONBody(req, function (tid) {
        console.log(tid);
        read_data_from_storage(function (file_data_array) {
          file_data_array = delete_task_entry(file_data_array, tid);
          write_task_to_file(file_data_array, function () {
            console.log(chalk.red(">>> task deleted"));
            res.end();
          });
        });
      });
    } else if (url === "/update_status") {
      readNonJSONBody(req, function (tid) {
        read_data_from_storage(function (file_data_array) {
          file_data_array = update_task_entry(file_data_array, tid);
          write_task_to_file(file_data_array, function () {
            res.end();
            console.log(chalk.hex("#7fffd4")(">>> Task status updated"));
          });
        });
      });
    }
  }
}

/* utility method to read and send response as file contents to the client otherwise throw err */
function custom_readFile(file_name, type, res) {
  fs.readFile(file_name, function (err, data) {
    if (err) {
      throw err;
    }
    res.writeHead(200, type);
    res.write(data);
    res.end();
  });
}

/* function to read data from user and return to caller function with the help of cb */
function readJSONBody(request, cb) {
  var body = "";
  request.on("data", function (chunk) {
    body += chunk;
  });

  request.on("end", function () {
    var data = JSON.parse(body);
    cb(data);
  });
}

/* sometimes only a string comes from the client and to handle such type of situations readNonJSONBody is used */
function readNonJSONBody(request, cb) {
  var body = "";
  request.on("data", function (chunk) {
    body += chunk;
  });

  request.on("end", function () {
    cb(body);
  });
}

/* function to create a new task  before creating a new task in the file read old contents of the file to preserve the old data */

function create_new_task(data, cb) {
  read_data_from_storage(function (task_array) {
    task_array.push(data);
    write_task_to_file(task_array, cb);
  });
}

/* function to read data from storage and return JSON Object as response with callback funtion for success operation otherwise throw error  */
function read_data_from_storage(cb) {
  fs.readFile("task", function (err, contents) {
    if (err) {
      throw err;
    }
    var tasks = contents.length === 0 ? [] : JSON.parse(contents);
    cb(tasks);
  });
}

/* function to write data to our file and return a callback function to notify suucessfull write operation otherwise throw an error */
function write_task_to_file(task_array, cb) {
  task_array_string = JSON.stringify(task_array);
  fs.writeFile("task", task_array_string, function (err) {
    if (err) {
      throw err;
    }
    cb();
  });
}

/*take old file array and return modified file array perfom delete*/
function delete_task_entry(file_data_array, taget_id) {
  file_data_array.forEach(function (x, xindex) {
    if (x.tid === taget_id) {
      x.isDeleted = !x.isDeleted;
      //uncomment below line to delete permanently from storage
      // file_data_array.splice(xindex, 1);
    }
  });
  return file_data_array;
}

/*take old file array and return modified file array perform update*/
function update_task_entry(file_data_array, taget_id) {
  file_data_array.forEach(function (x, xindex) {
    if (x.tid === taget_id) {
      x.isChecked = !x.isChecked;
    }
  });
  return file_data_array;
}
