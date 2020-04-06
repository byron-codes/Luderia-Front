import axios from "axios";
import { baseURL } from "../endpoints";

export const login = (login, password) => {
  const payload = axios.post(`${baseURL}/user/login`, {
    login: login,
    password: password
  });
  return {
    type: "USER_LOGIN",
    payload: payload
  };
};

export const logout = () => {
  return {
    type: "USER_LOGOUT"
  };
};
