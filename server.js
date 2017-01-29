var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));




//Use handlebars to visualize
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Routes =============================================================


require("./controllers/burger_controllers.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

