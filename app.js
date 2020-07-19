const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

http
  .createServer((req, res) => {
    const parsed = url.parse(req.url);
    const filename = path.parse(parsed.pathname);
    const filen = filename.name == "" ? "index" : filename.name; //actual name of the file
    const ext = filename.ext=="" ? ".html" : filename.ext;
    const dir = filename.dir=="/" ? "" : filename.dir + "/";
    const page = filename.base=="" ? "site/index.html" : filename.base;
    
    const file = (dir + filen + ext).replace("/", "");
    console.log(filename);
    // console.log(filen, "filen");
    // console.log(ext, "ext");
    // console.log(dir, "dir");
    // console.log(page, "page");

    const mimeTypes = {
        ".html": "text.html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".png": "image/png",
        ".jpg": "image.jpeg",
        ".gif": "image.gif"
    }

    fs.readFile(file, (error, data) => {
      if(page){
           console.log("is page");
          if(mimeTypes.hasOwnProperty(ext)){
              res.writeHead(200, {"Content-Type": mimeTypes[ext] });
              res.write("<script>let page='" + page + "';</script>");
              res.end(data, "utf-8");
          }
      }
    });
  })
  .listen("8080", ()=> {
      console.log("Server is running at port 8080");
  });
