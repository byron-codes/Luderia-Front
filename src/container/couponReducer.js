const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUPON_SELECT":
      return { ...action.payload.data };
    case "COUPON_CLEAN":
      return INITIAL_STATE;
    default:
      return state;
  }
}
