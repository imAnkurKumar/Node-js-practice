const express = require("express");
const router = express.Router();
const middleware = require("./middleware");

router.use(middleware);

router.get("/", (req, resp) => {
  // resp.sendFile(`${pathdir}/index.html`);
  resp.render("index");
});

router.get("/home", (req, resp) => {
  // resp.sendFile(`${pathdir}/home.html`);
  resp.render("home");
});

module.exports = router;
