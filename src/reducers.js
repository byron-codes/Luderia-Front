import { combineReducers } from "redux";
import CartReducer from "./container/cartReducer";
import CardReducer from "./container/cardReducer";
import AddressReducer from './container/addressReducer'
import CouponReducer from './container/couponReducer'

const rootReducer = combineReducers({
  cart: CartReducer,
  card: CardReducer,
  address: AddressReducer,
  coupon: CouponReducer
});

export default rootReducer;
