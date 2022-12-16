const express = require("express");
const { getCarts, getCartByUserID, getCartByID } = require("./cartControllers");
const cartRouter = express.Router();

cartRouter.get("/", (request, response) => {
  const carts = getCarts();
  response.json(carts);
});

cartRouter.get("/:cartID", (request, response) => {
  // Get the cart from the database with id == cartID
  const cart = getCartByID(request.params.cartID);
  if (!cart) {
    response.status(404).json({ data: "Cart doesn't exist" });
  }
  // Return cart as JSON object
  response.json(cart);
});

cartRouter.get("/user/:userID", (request, response) => {
  console.log(request.params.userID);
  const cart = getCartByUserID(request.params.userID);
  if (!cart) {
    response.status(404).json({ data: "Cart doesn't exist" });
  }
  // Return cart as JSON object
  response.json(cart);
});

module.exports = cartRouter;
