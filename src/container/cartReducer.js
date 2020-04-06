const INITIAL_STATE = {
  items: [],
  total: 0,
  forceUpdate: false,
  freight: 0
};

export default function(state = INITIAL_STATE, action) {
  state.forceUpdate = !state.forceUpdate;
  const index = indexById(action.payload || { id: 0 }, state);
  const items = state.items;
  switch (action.type) {
    case "CART_ADD":
      if (index !== undefined) {
        const final = items[index].quantity + parseInt(action.payload.quantity);
        items[index].quantity =
          final > items[index].quantityStock
            ? items[index].quantityStock
            : final;
      } else {
        items.push({
          ...action.payload.item,
          quantity: parseInt(action.payload.quantity)
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
