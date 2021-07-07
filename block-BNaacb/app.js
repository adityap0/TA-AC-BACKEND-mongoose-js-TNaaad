let express = require("express");
var app = express();
var mongoose = require("mongoose");

//connecting to Db
mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);

//Routes
app.get("/", (req, res) => {
  res.send(`Hello!`);
});

//listener
app.listen(4000, () => {
  console.log(`on server 4000..`);
});
