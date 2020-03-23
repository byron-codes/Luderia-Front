export const selectAddress = address => {
  return {
    type: "ADDRESS_SELECT",
    payload: { ...address }
  };
};
