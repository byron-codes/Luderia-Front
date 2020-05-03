export const selectCard = card => {
  return {
    type: "CARD_SELECT",
    payload: { ...card }
  };
};

export const removeCard = id => {
  return {
    type: "CARD_REMOVE",
    payload: id
  };
};