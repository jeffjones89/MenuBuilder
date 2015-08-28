var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var env = require("./env")
var session = require("express-session")

app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");
app.use(session({secret: "pizza jam"}))

var mealsController = require("./config/controllers/meals")
app.get("/", function(req, res){
  res.render("index", {})
});

app.use("/", mealsController);

// TWITTER AUTH

var passport = require("passport")
var TwitterStrategy = require("passport-twitter").Strategy
passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(obj, done) {
  done(null, obj)
})
app.use(passport.initialize())
app.use(passport.session())

passport.use(new TwitterStrategy({
  consumerKey: env.consumerKey,
  consumerSecret: env.consumerSecret,
  callbackUrl: env.callbackUrl
}, function(aToken, aTokenSecret, aProfile, done){
  token = aToken
  tokenSecret = aTokenSecret
  profile = aProfile
  done(null, profile)
}))

app.get("/auth/twitter", passport.authenticate("twitter"))

app.get("/auth/twitter/callback", passport.authenticate('twitter'), function(req, res){
 req.session.token = token
 req.session.tokenSecret = tokenSecret
 req.session.profile = profile
 res.redirect("/")
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
