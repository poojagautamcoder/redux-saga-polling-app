import { put, call } from "@redux-saga/core/effects";
import { ListSuccess, ListError } from "../action/index";
import axios from "axios";

export function* List(action) {
  const url = `https://secure-refuge-14993.herokuapp.com/list_users`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response) {
      yield put(ListSuccess({ response: response }));
    } else {
      yield put(ListError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(ListError({ error: error }));
  }
}
