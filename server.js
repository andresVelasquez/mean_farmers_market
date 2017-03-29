var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // required to jsonp objects passed with POST.
app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

require("./server/config/routes.js")(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})
