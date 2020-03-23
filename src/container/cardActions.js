export const selectCard = card => {
  return {
    type: "CARD_SELECT",
    payload: { ...card }
  };
};
