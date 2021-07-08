var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    title: { type: String, required: true },
    category: String,
    price: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let Product = mongoose.model("Product", productSchema);
module.exports = Product;
