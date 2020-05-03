const INITIAL_STATE = {
  items: [],
  total: 0,
  forceUpdate: false,
  freight: 0,
};

export default function (state = INITIAL_STATE, action) {
  state.forceUpdate = !state.forceUpdate;
  let id = 0;
  if (action.payload && action.payload.id) {
    id = action.payload.id;
  } else if (action.payload && action.payload.item) {
    id = action.payload.item.id;
  }
  const index = indexById(id || 0, state);
  const items = state.items;
  switch (action.type) {
    case "CART_ADD":
      debugger;
      if (index !== undefined) {
        const final = items[index].quantity + parseInt(action.payload.quantity);
        items[index].quantity =
          final > items[index].quantityStock
            ? items[index].quantityStock
            : final;
      } else {
        items.push({
          ...action.payload.item,
          quantity: parseInt(action.payload.quantity),
        });
      }

      return { ...state, items: items, total: calculateTotal(state) };
    case "CART_REMOVE":
      state.items.splice(indexById(action.payload, state), 1);
      return { ...state, items: state.items, total: calculateTotal(state) };
    case "CART_CONFIG":
      items[index].quantity =
        parseInt(action.payload.value) > items[index].quantityStock
          ? items[index].quantityStock
          : parseInt(action.payload.value);
      items[index].quantity =
        items[index].quantity < 1 ? 1 : items[index].quantity;
      return { ...state, total: calculateTotal(state) };
    case "CART_CLEAN":
      return INITIAL_STATE;
    case "CART_FREIGHT":
      return { ...state, freight: action.payload.data };
    default:
      return state;
  }
}

function indexById(id, state) {
  debugger;
  for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].id === id) {
      return i;
    }
  }
  return undefined;
}

function calculateTotal(state) {
  let total = 0;
  state.items.map((item) => {
    total = total + item.value * item.quantity;
  });
  return total;
}
