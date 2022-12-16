const carts = [
  {
    user_id: 1,
    products: [
      {
        product_id: 1,
        quantity: 2,
      },
      {
        product_id: 2,
        quantity: 5,
      },
    ],
  },
  {
    user_id: 2,
    products: [
      {
        product_id: 0,
        quantity: 4,
      },
      {
        product_id: 3,
        quantity: 12,
      },
    ],
  },
];

const getCarts = () => {
  // Get all carts
  return carts;
};

const getCartByID = (cartID) => {
  const cart = carts[cartID];

  return cart;
};

const getCartByUserID = (userID) => {
  // Get cart by user ID
  const foundCart = carts.find((cart) => {
    cart.user_id == userID;
  });

  return foundCart;
};

module.exports = {
  getCarts,
  getCartByUserID,
  getCartByID,
};
