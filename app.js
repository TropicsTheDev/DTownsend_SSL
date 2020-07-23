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

app.use(express.static("public"));
app.use("/", router);
const server = app.listen("8080");
