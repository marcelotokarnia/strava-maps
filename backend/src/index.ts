const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});
app.get("/manifest.json", function(req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/public", "manifest.json"));
});
app.get("/favicon.ico", function(req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/public", "favicon.ico"));
});
app.use(
  "/static",
  express.static(path.join(__dirname, "../../frontend/build/static"))
);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);
