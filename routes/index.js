var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var Comment = require("../models/comments");
var passport = require("passport");
var User = require("../models/user");

//ROOT
router.get("/", function(req, res){
    res.render("landing");
});
//SIGNUP FORM
router.get("/register", function(req, res){
    res.render("register", {page: "register"});
});
//SIGNUP ROUTE
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp "+user.username);
            res.redirect("/campgrounds"); 
        });
    });
});
//LOGIN FORM
router.get("/login", function(req, res) {
   res.render("login", {page: "login"}); 
});
//LOGIN ROUTE
router.post("/login", passport.authenticate("local", 
    {
        // successFlash: "Logged in",
        successRedirect:"/campgrounds", 
        failureRedirect: "/login",
        failureFlash: true
        // successFlash: true
    }), function(req, res){
});
//LOGOUT
router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "Succesfully logged out");
   res.redirect("/campgrounds");
});

module.exports = router;