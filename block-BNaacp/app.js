let express = require("express");
var sample = express();
let logger = require("morgan");
let mongoose = require("mongoose");
let User = require("./models/user.js");

mongoose.connect(
  "mongodb://127.0.0.1:27017/assignment2",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);
//middleWares
sample.use(express.json());
sample.use(express.urlencoded({ extended: false }));
sample.use(logger("dev"));

//Routes
//Create
sample.post("/users", (req, res) => {
  console.log(req.body);
  User.create(req.body, (error, addedUser) => {
    console.log(error);
    res.send(addedUser);
  });
});
//Read
sample.get("/users", (req, res) => {
  console.log(req.body);
  User.find({}, (error, user) => {
    console.log(error);
    res.json({ users: user });
  });
});
sample.get("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

//Update
sample.put("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, { new: true }, (err, user) => {
    console.log(err);
    res.json(user);
  });
});
//Delete
sample.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndRemove(id, (err, user) => {
    console.log(err);
    res.send(`successfully deleted`);
  });
});

sample.listen(4000, () => {
  console.log("On server 4000...");
});
