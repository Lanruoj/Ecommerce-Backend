const { urlencoded } = require("express");
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/products", require("./controllers/products/productRoutes"));
app.use("/carts", require("./controllers/carts/cartRoutes"));

app.get("/", (request, response) => {
  response.json({
    data: "Data sent",
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
