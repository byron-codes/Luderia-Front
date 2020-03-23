const INITIAL_STATE = {
  cart: {
    items: [],
    forceUpdate: false,
    total: 0
  },
  card: {},
  address: {},
  coupon: {}
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};

export const deleteState = () => {
  try {
    const serializedState = JSON.stringify(INITIAL_STATE);
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};
