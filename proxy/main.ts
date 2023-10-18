import express from "express";
import path from "path";

const app = express();
var cons = require("consolidate");
app.engine("html", cons.swig)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.get("*", (req, res) => {
    res.render("index");
});

app.listen(1337, () => {
  console.log(`Server is running on port ${1337}`);
});