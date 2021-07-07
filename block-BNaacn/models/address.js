let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let addSchema = new Schema(
  {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Add = mongoose.model("Add", userSchema);
module.exports = Add;
