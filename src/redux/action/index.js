//add item to cart
export const addItem = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
//delete item from cart
export const deleteItem = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};

export const clear = () => {
  return {
    type: "CLEAR_PRODUCT",
  };
};
