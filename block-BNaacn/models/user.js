var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true, match: /@/ },
    age: { type: Number, default: 0 },
    password: { type: String, min: 5 },
    createdAt: { type: date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);
module.exports = User;
