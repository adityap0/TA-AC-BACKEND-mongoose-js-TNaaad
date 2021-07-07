const { date } = require("assert-plus");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favorites: [String],
  marks: [Number],
  password: { type: String, min: 6, max: 15 },
  createdAt: { type: date, default: new Date() },
});

var User = mongoose.model("User", userSchema);
module.exports = User;
