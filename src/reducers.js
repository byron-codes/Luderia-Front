import { combineReducers } from "redux";
import CartReducer from "./container/cartReducer";
import CardReducer from "./container/cardReducer";
import AddressReducer from './container/addressReducer'
import CouponReducer from './container/couponReducer'
import UserReducer from "./container/userReducer";

const rootReducer = combineReducers({
  cart: CartReducer,
  creditCard: CardReducer,
  address: AddressReducer,
  coupon: CouponReducer,
  user: UserReducer
});

export default rootReducer;
