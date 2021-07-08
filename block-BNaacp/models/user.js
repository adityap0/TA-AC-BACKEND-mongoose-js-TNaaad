let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, match: /@/ },
  sports: [String],
});

let User = mongoose.model("User", userSchema);
module.exports = User;
