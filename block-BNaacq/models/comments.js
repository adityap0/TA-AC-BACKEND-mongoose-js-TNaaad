let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
