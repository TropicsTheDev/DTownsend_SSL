const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

http.createServer((req, res) => {
    const parsed = url.parse(req.url);
    const filename = path.parse(parsed.pathname);
    let filen = ""; //actual name of the file

    if(filename.name = ""){
        filen = "index";
    }
    else{
        filen = filename.name;
    }

    fs.readFile(filen + ".html", (error, data) => {
      res.writeHead(200);
      res.end(data);
    });
  }).listen("8080");
