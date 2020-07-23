const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const ejs = require("ejs");
const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

router.get("/", (req, res) => {
  res.render("index", { pagename: "Home" });
});
router.get("/about", (req, res) => {
  res.render("about", { pagename: "About" });
});
router.get("/contact", (req, res) => {
  res.render("contact", { pagename: "Contact" });
});
router.get("/post", (req, res) => {
  res.render("post", { pagename: "Post" });
});

router.post("/login", (req, res) => {
  //console.log(req.body);
  const errors = [];

  //validations
  if (req.body.email == "") {
    errors.push("Email is required");
    console.log("failed");
  }
  if (req.body.password == "") {
    errors.push("password is required");
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {
    errors.push("Email is not valid");
  } //is an email address
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      req.body.password
    )
  ) {
    errors.push("Password is not valid");
  } //fits password conditions

  console.log(errors.length)

  res.render("index", { pagename: "Home", errors: errors });
});

router.post("/register", (req, res) => {
    const errors = [];
    const data = req.body;
    //console.log(data.age);

    //validations
    if(data.firstName == ""){
        errors.push("First name required");
    }
    if(data.lastName == ""){
        errors.push("Last name required");
    }
    if(data.city == ""){
        errors.push("City required");
    }
    if(data.state == ""){
        errors.push("State Required");
    }
    if(data.zip == ""){
        errors.push("Zip required");
    }
    if(!data.age){
        errors.push("Age Required")
    }
    if(typeof(data.gender) == "undefined"){
        errors.push("Gender required");
    }
    if(typeof(data.consent) == "undefined"){
        errors.push("Consent required");
    }
    if(data.bio == ""){
        errors.push("Bio required");
    }

    for(error in errors){
        console.error(errors[error]);
    }
    if(errors.length == 0 ){
        console.log("You have successfully logged in!")
    }
    res.render("index", { pagename: "Home", errors: errors });
});

app.use(express.static("public"));
app.use("/", router);
const server = app.listen("8080");
