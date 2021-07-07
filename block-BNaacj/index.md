writeCode

Q. Update user schema to

- contains password field with minimum 5 characters and maximim 15
- add createdAt field of type date and default it to current date.
  <!-- Done! -->
  <!-- const { date } = require("assert-plus");
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

var addSchema = new Schema({
village: String,
city: String,
State: String,
pin: Number,
user: Schema.types.ObjectId,
}); -->
