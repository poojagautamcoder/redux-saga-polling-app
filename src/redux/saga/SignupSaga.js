import { put, call } from "@redux-saga/core/effects";
import { SignupSuccess, SignupError } from "../action/index";
import axios from "axios";

export function* Signup(action) {
  const { username, password, role } = action.payload;
  const url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response) {
      yield put(SignupSuccess({ response: response }));
    } else {
      yield put(SignupError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(SignupError({ error: error }));
  }
}
