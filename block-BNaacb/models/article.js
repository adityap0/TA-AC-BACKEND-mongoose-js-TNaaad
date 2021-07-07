// writeCode

// Create a simple express app(app.js)

// - connect to local mongodb database using `mongoose.connect`
// - add article schema(article.js) using mongoose inside models directory.
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  name: String,
  age: Number,
});
