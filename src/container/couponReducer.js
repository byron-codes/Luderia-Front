const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUPON_SELECT":
      return { ...action.payload.data };
    default:
      return state;
  }
}

