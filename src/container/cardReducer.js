const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CARD_SELECT":
      return { ...action.payload };
    default:
      return state;
  }
}

