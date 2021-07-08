let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tags: { type: [String], min: 2 },
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

let Article = mongoose.model("Article", articleSchema);
module.exports = Article;
