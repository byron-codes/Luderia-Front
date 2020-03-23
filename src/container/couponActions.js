import axios from "axios";
import { baseURL } from "../endpoints";

export const selectCoupon = coupon => {
  const payload = axios.get(`${baseURL}/coupon/code?code=${coupon}`);
  return {
    type: "COUPON_SELECT",
    payload: payload
  };
};
