const express = require("express");
const path = require("path");
const app = express();

const pathdir = path.join(__dirname, "public");
// console.log(pathdir);

app.use(express.static(pathdir));

app.get("/", (req, resp) => {
  resp.sendFile(`${pathdir}/index.html`);
});

app.get("/home", (req, resp) => {
  resp.sendFile(`${pathdir}/home.html`);
});

app.listen(4000);
