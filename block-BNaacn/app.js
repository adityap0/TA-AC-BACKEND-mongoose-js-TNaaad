let express = require("express");
let mongoose = require("mongoose");
let app = express();
let Product = require("./models/product");

//connect to Db
mongoose.connect(
  "mongodb://127.0.0.1:27017/assignment",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error ? error : "Connected to Db");
  }
);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.get("/", (req, res) => {
  res.send("Assignment 1");
});

//routes
//CREATE
app.post("/products", (req, res, next) => {
  console.log(req.body);
  Product.create(req.body, (err, product) => {
    console.log(err);
    res.send(product);
  });
});
//READ
app.get("/products", (req, res) => {
  Product.find({ title: "Google Pixel" }, (error, product) => {
    console.log(error);
    res.json({ product: product });
  });
});
app.get("/products/:id", (req, res) => {
  //grab the Id
  let id = req.params.id;
  Product.findById(id, (error, product) => {
    console.log(error);
    res.json(product);
  });
});

//UPDATE
app.put("/products/:id", (req, res) => {
  console.log(req.body);
  let id = req.params.id;
  Product.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, updatedProduct) => {
      console.log(error);
      res.json(updatedProduct);
    }
  );
});

//DELTE
app.delete("/products/:id", (req, res) => {
  console.log(req.body);
  let id = req.params.id;
  Product.findByIdAndDelete(id, (error, deletedProduct) => {
    console.log(error);
    res.json(`${deletedProduct.title} was deleted`);
  });
  Product.findOneAndDelete({ _id: id });
});

//error Handlers

//listener
app.listen(4000, () => {
  console.log(`On server 4000...`);
});
