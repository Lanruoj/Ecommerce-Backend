const express = require("express");
const {
  getProducts,
  getProductByID,
  createProduct,
} = require("./productControllers");
const productRouter = express.Router();

productRouter.get("/", (request, response) => {
  const products = getProducts();
  response.json(products);
});

productRouter.get("/:productID", (request, response) => {
  // Get the product from the database with id == productID
  const product = getProductByID(request.params.productID);
  if (!product) {
    response.status(404).json({ data: "Product doesn't exist" });
  }
  // Return product as JSON object
  response.json(product);
});

productRouter.post("/", (request, response) => {
  const product = createProduct({
    title: request.body.title,
    description: request.body.description,
    price: request.body.price,
    stock: request.body.stock,
  });

  response.json(product);
});

module.exports = productRouter;
