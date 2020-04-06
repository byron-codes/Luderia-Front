const INITIAL_STATE = {
  cart: {
    items: [],
    total: 0,
    forceUpdate: false,
    sendValue: 32
  },
  creditCard: {},
  address: {},
  coupon: {},
  user: { logged: false }
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
