const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://whgpwls210:hyejin0749!@boilerplate.xxq5b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
