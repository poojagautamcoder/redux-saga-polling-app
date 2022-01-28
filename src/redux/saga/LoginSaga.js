import { put, call } from "@redux-saga/core/effects";
import { LoginSuccess, LoginError } from "../action/index";
import axios from "axios";
// import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export function* logIn(action) {
  const { username, password } = action.payload;
  const url = ` https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response) {
      localStorage.setItem("token", response.data.token);
      let user = jwt_decode(response.data.token);
      console.log(user, "token");
      if (user && user.role) {
        localStorage.setItem("role", user.role);
      }
      yield put(LoginSuccess({ response: response.data.token }));
      if (user.role === "admin") {
        window.location.replace("/dash-board");
      } else {
        window.location.replace("/poll-page");
      }
    } else {
      yield put(LoginError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(LoginError({ error: error }));
  }
}
