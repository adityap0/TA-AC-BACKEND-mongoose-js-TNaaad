let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/, required: true },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);
module.exports = User;
