import { put, call } from "@redux-saga/core/effects";
import { LoginSuccess, LoginError } from "../action/index";
import axios from "axios";

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
      yield put(LoginSuccess({ response: response }));
      window.location.replace("/DashBoard");
    } else {
      yield put(LoginError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(LoginError({ error: error }));
  }
}
