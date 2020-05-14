// Requiring necessary npm packages
require("dotenv").config();
var express = require("express");
// var session = require("express-session");
// Requiring passport as we've configured it
// var passport = require("./config/passport");
const AuthController = require("./controllers/authController");
const UserController = require("./controllers/usersController");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/api-routes.js")(app);
app.use("/api/auth", AuthController);
app.use("/api/user", UserController);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});