let express = require("express");
let mongoose = require("mongoose");
let app = express();

//connect to Db
mongoose.connect(
  "mongodb://127.0.0.1:27017/assignment",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);

//middlewares

//routes
app.get("/", (req, res) => {
  res.send("Assignment 1");
});

//listener
app.listen(4000, () => {
  console.log(`On server 4000...`);
});
