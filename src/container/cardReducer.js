const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  const newState = state;
  switch (action.type) {
    case "CARD_SELECT":
      const id = indexById(action.payload.id, state);
      if (id != undefined) {
        return state;
      }
      newState.push({ ...action.payload });
      return newState;
    case "CARD_REMOVE":
      newState.splice(indexById(action.payload, state), 1);
      return newState
    default:
      return state;
  }
}

function indexById(id, state) {
  for (var i = 0; i < state.length; i++) {
    if (state[i].id === id) {
      return i;
    }
  }
  return undefined;
}
