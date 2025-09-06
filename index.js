const mongoose = require("mongoose");
const express = require("express");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
//to use other types other than json in insomnia
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("wsg g, how you doing meow moew moeeeee");
});

// app.post('/api/products', (req,res)=>{
//   res.json({
//     message: "Product created (mock)",
//     data: req.body
//   });
// });

//update api

//delete product

mongoose
  .connect(
    "mongodb+srv://mohit:8qx1zQXbFwIP54Wy@backenddb.cv1mu5h.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log("server is in port 3000");
    });
  })
  .catch(() => {
    console.log("not connected");
  });
