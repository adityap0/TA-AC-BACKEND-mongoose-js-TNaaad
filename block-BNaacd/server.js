let express = require("express");
let app = express();
let mongoose = require("mongoose");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

//DB connect
mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "connected to DB");
  }
);
//middleware
app.use(logger("dev"));
app.use(cookieParser());
//routes
app.get("/", (req, res) => {
  res.send(`All is Well`);
});
//listener
app.listen(4000, () => {
  console.log(`on server 4000...`);
});
