require("dotenv").config();
var express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
var bodyParser = require("body-parser");
const keys = require("./config/keys");


var db = require("./models");
require("./services/passport.js")(passport, db.User);



var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

//to use cookies for session
app.use(
  cookieSession({
    //keep cookie session for 15 days
    maxAge: 15*24*60*1000,
    keys: [keys.cookieKey]
  })
);
//tell passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());


// Routes
require("./routes/authRoutes")(app);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  videoApp.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
