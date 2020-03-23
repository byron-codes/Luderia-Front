const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDRESS_SELECT":
      return { ...action.payload };
    default:
      return state;
  }
}

