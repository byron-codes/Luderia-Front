export const addItem = item => {
  return {
    type: "CART_ADD",
    payload: { ...item }
  };
};

export const removeItem = id => {
  return {
    type: "CART_REMOVE",
    payload: id
  };
};

export const configQuantity = (id, value) => {
  return {
    type: "CART_CONFIG",
    payload: { id: id, value: value }
  };
};
