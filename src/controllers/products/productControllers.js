const products = [
  {
    title: "Bag",
    description: "Bag for all occasions",
    price: 42,
    stock: 10,
  },
  {
    title: "Ring",
    description: "Wedding Ring",
    price: 4200,
    stock: 5,
  },
  {
    title: "Wallet",
    description: "Wallet for all occasions",
    price: 420,
    stock: 15,
  },
];

const getProducts = () => {
  return products;
};

const getProductByID = (productID) => {
  const product = products[productID];
  return product;
};

const createProduct = (product) => {
  // Insert the product into the database and return the created product
  const newProduct = {
    id: 4,
    ...product,
  };

  return newProduct;
};

module.exports = {
  getProducts,
  getProductByID,
  createProduct,
};
