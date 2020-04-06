import axios from "axios";
import { baseURL } from "../endpoints";

export const addItem = (item, quantity) => {
  return {
    type: "CART_ADD",
    payload: { item: item, quantity: parseInt(quantity) }
  };
};

export const removeItem = id => {
  return {
    type: "CART_REMOVE",
    payload: id
  };
};

export const configQuantity = (id, value) => {
  return {
    type: "CART_CONFIG",
    payload: { id: id, value: value }
  };
};

export const cleanCart = () => {
  return {
    type: "CART_CLEAN"
  };
};

export const setFreight = cep => {
  const payload = axios.get(`${baseURL}/freight/${cep}`);
  return {
    type: "CART_FREIGHT",
    payload: payload
  }
}
