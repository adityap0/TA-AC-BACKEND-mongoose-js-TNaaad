let express = require("express");
var mongoose = require("mongoose");
var app = express();

//connect to dataBase
mongoose.connect(
  "mongodb://127.0.0.1:27017/sample",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "connected to DB");
  }
);

//routes
app.use((req, res, next) => {
  next();
});
app.get("/", (req, res) => {
  res.end();
});

//listener
app.listen(4000, () => {
  console.log(`Server is listening @ 4000...`);
});
