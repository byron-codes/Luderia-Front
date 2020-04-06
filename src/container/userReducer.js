const INITIAL_STATE = { logged: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...action.payload.data, logged: true };
    case "USER_LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}
