const express = require("express");
const path = require("path");

const app = express();

// const pathdir = path.join(__dirname, "public");
// console.log(pathdir);
// app.use(express.static(pathdir));

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
  // resp.sendFile(`${pathdir}/index.html`);
  resp.render("index");
});

app.get("/home", (req, resp) => {
  // resp.sendFile(`${pathdir}/home.html`);
  resp.render("home");
});

app.listen(4000);
