const INITIAL_STATE = {
  items: [],
  total: 0,
  forceUpdate: false
};

export default function(state = INITIAL_STATE, action) {
  state.forceUpdate = !state.forceUpdate;
  const index = indexById(action.payload || { id: 0 }, state);
  const items = state.items;
  switch (action.type) {
    case "CART_ADD":
      if (index !== undefined) {
        items[index].quantity = items[index].quantity + 1;
      } else {
        items.push({ ...action.payload, quantity: 1 });
      }

      return { ...state, items: items, total: calculateTotal(state) };
    case "CART_REMOVE":
      state.items.splice(indexById(action.payload, state), 1);
      return { ...state, items: state.items, total: calculateTotal(state) };
    case "CART_CONFIG":
      items[index].quantity = parseInt(action.payload.value);
      return { ...state, total: calculateTotal(state) };
    default:
      return state;
  }
}

function indexById(payload, state) {
  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].id === payload.id) {
      return i;
    }
  }
  return undefined;
}

function calculateTotal(state) {
  let total = 0;
  state.items.map(item => {
    total = total + item.value * item.quantity;
  });
  return total;
}
