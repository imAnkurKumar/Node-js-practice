const express = require("express");
const path = require("path");
// const router = express.Router();
const router = require("./router");


const app = express();

app.use(router);
app.set("view engine", "ejs");
// const pathdir = path.join(__dirname, "public");
// console.log(pathdir);
// app.use(express.static(pathdir));

app.listen(4000);
